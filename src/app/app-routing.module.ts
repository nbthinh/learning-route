import { EnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { FirstComponent } from './first/first.component';
import { ArticlesGuard } from './guards/articles.guard';
import { ChildHomeComponent } from './home/child-home/child-home.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  // {
  //   path: 'first-component',
  //   component: FirstComponent, // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'child-a', // child route path
  //       component: ChildHomeComponent, // child route component that the router renders
  //     },
  //     {
  //       path: 'child-b',
  //       component: ChildHomeComponent, // another child route component that the router renders
  //     },
  //   ],
  // },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: 'child', // child route path
        component: ChildHomeComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: "articles",
    canLoad: [ArticlesGuard],
    data: {
      feature: "article",
      permissions: "articles-read"
    },
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticleModule)
  }

  // {
  //   path: "detail/:slug",
  //   component: ArticleDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

