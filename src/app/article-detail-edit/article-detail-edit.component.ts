import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, of, pluck, Subject, switchMap, takeUntil } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

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
export class ArticleDetailEditComponent implements OnInit {
  form$!: Observable<FormGroup>;
  initialFormValue: any;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly fb: FormBuilder
  ){}


  ngOnInit(){
    this.form$ = this.route.params.pipe(
      pluck("slug"),
      switchMap( (slug: string) => this.articleService.getArticle(slug)),
      filter(article => !!article),
      switchMap(article => of(this.initForm(article)))
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
