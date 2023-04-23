import { Component, OnInit } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Article } from "../models/article";
@Component({
    selector: `app-home`,
    // templateUrl: "./home.component.html"
    template: `
      <div>Home component html</div>
      <ul>
        <li *ngFor="let article of articles$ | async" style="border: 1px solid black; padding: 20px;">
          {{ article.title }} <br/>
          {{ article.body }}
        </li>
      </ul>
      <!-- <router-outlet></router-outlet> -->
    `
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor() {}
  ngOnInit(): void {
    this.articles$ = of<Article[]>([
      { title: "Title 1", body: "Hello Body 1", slug: "title-1" },
      { title: "Title 2", body: "Hello Body 2", slug: "title-2" }
    ])
  }
}
