import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable, of, pluck, switchMap } from "rxjs";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article.service";
@Component({
    selector: `app-home`,
    // templateUrl: "./home.component.html"
    template: `
        <ng-container *ngIf="article$ | async as article; else noArticle">
            <h1>{{article?.title}}</h1>
            <p>{{article?.body}}</p>
        </ng-container>
        <ng-template #noArticle>
            No Article Found
        </ng-template>
        {{ astring$ | async }}
    `
})
export class ArticleDetailComponent implements OnInit {
    article$!: Observable<Article | undefined>;
    astring$!: Observable<string>;
    constructor(private readonly route: ActivatedRoute, private readonly articleService: ArticleService){

    }
    ngOnInit(): void {
        // console.log("this.route.params = ")
        // this.route.params.subscribe(console.log)
        // console.log("this.route.paramMap = ")
        // this.route.paramMap.subscribe(console.log)

        // console.log("this.route.snapshot.params = ", this.route.snapshot.params)
        // console.log("this.route.snapshot.paramMap = ", this.route.snapshot.paramMap)
        this.astring$ = of("Hello astring")
        this.article$ = this.route.params.pipe(
            pluck("slug"),
            switchMap( (slug: string) => this.articleService.getArticle(slug)),
            filter(article => !!article)
        )
        this.article$.subscribe(console.log)
    }

}
