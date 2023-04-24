import { Injectable } from "@angular/core";
import { find, first, from, map, Observable, of, shareReplay } from "rxjs";
import { Article } from "../models/article";

@Injectable({
    providedIn: "root"
})
export class ArticleService{
    constructor() {

    }
    get article$() {
        return of<Article[]>([
            { title: "Title 1", body: "Hello Body 1", slug: "title-1" },
            { title: "Title 2", body: "Hello Body 2", slug: "title-2" }
        ]).pipe(shareReplay(1));
    }

    abc() {
        return this.article$;
    }

    getArticle(slug: string) : Observable<Article | undefined>{
        return this.article$.pipe(map(articles => articles.find(ar => ar.slug === slug)))
    }
}