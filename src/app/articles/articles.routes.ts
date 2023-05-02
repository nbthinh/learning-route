import { Routes } from "@angular/router";
import { ArticleDetailEditComponent } from "../article-detail-edit/article-detail-edit.component";
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
            },
            {
                path: "edit",
                component: ArticleDetailEditComponent
            }
        ]
    }
];