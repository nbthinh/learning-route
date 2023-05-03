import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { filter, Observable, of, pluck, shareReplay, Subject, switchMap, take, takeUntil } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { CheckDeactivate } from '../services/check-deactivate';

@Component({
  selector: 'app-article-detail-edit',
  // templateUrl: './article-detail-edit.component.html',
  template: `
    <form [formGroup]="form$ | async">
      <label for="title">Title</label>
      <input type="text" id="title" formControlName="title">
      <br><br>
      <label for="body">Body</label>
      <textarea id="body" formControlName="body"></textarea>
      <br><br>
    </form>
  `,
  styleUrls: ['./article-detail-edit.component.css']
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
  form$!: Observable<FormGroup>;
  initialFormValue: any;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly fb: FormBuilder
  ){}
  checkDeactivate(): Observable<boolean> {
    let formValue: unknown;
    this.form$.pipe(take(1)).subscribe(form => {
      formValue = form.getRawValue()
    })
    const isEdited = JSON.stringify(this.initialFormValue) != JSON.stringify(formValue);
    console.log("good_afternoon = ")
    return of(!isEdited || confirm("Do you want to cancel changes?"))
  }


  ngOnInit(){
    this.form$ = this.route.params.pipe(
      pluck("slug"),
      switchMap( (slug: string) => this.articleService.getArticle(slug)),
      filter(article => !!article),
      switchMap(article => of(this.initForm(article))),
      shareReplay(1)
    )
    console.log("this.form$ = ", this.form$)
  }
  initForm(article: Article | undefined): FormGroup {
    const form = this.fb.group({
      title: [article?.title],
      body: [article?.body]
    })
    this.initialFormValue = form.getRawValue();
    return form;
  }
}
