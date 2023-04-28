import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
@Component({
    selector: `article-list`,
    template: `
        <ul>
            <li *ngFor="let article of articles$ | async" style="border: 1px solid black; padding: 20px; margin-bottom: 10px;">
            {{ article.title }} <br/>
            <!-- <a [routerLink]="['/detail', article.slug]">Read more</a> -->
            <a style="cursor: pointer; text-decoration: underline;" (click)="onReadMoreClick(article.slug)">Read more</a>

            </li>
        </ul>
    `
})
export class ArticleListComponent {
    articles$!: Observable<Article[]>;
    constructor(private readonly articleService: ArticleService, private readonly router: Router) {}
    ngOnInit(): void {
        this.articles$ = this.articleService.article$;
    }
    onReadMoreClick(slug: string){
        this.router.navigate(['/articles', slug])
    }
}
