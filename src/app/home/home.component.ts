import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from, Observable, of } from "rxjs";
import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";
@Component({
    selector: `app-home`,
    // templateUrl: "./home.component.html"
    template: `
      <div>Home component html</div>

    `
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
}
