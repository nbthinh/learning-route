import { Component, OnInit } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";
@Component({
    selector: `app-home`,
    // templateUrl: "./home.component.html"
    template: `
      <div>Home component html</div>
      <ul>
        <li *ngFor="let article of articles$ | async" style="border: 1px solid black; padding: 20px; margin-bottom: 10px;">
          {{ article.title }} <br/>
          <a href="#">Read more</a>
        </li>
      </ul>
      <!-- <router-outlet></router-outlet> -->
    `
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor(private readonly articleService: ArticleService) {}
  ngOnInit(): void {
    this.articles$ = this.articleService.article$;
  }
}
