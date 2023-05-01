import { Routes } from "@angular/router";
import { ArticlesGuard } from "../guards/articles.guard";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from "./article-list/article-list.component";

export const articlesRoutes: Routes = [
    { path: "", component: ArticleListComponent },
    {
        path: ":slug",
        canActivateChild:[ArticlesGuard],
        children: [
            {
                path: "",
                component: ArticleDetailComponent
            }
        ]
    }
];