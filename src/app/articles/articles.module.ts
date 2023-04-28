import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleListComponent } from "./article-list/article-list.component";
import { RouterModule } from "@angular/router";
import { articlesRoutes } from "./articles.routes";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent
    ],
    imports: [
        CommonModule,
        // ArticleListComponent,
        RouterModule.forChild(articlesRoutes)
    ]
})

export class ArticleModule{

}