import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
// import { ChildHomeComponent } from './home/child-home/child-home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { ArticleModule } from './articles/articles.module';
// import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
// import { CommonModule } from '@angular/common';


// const routes: Routes = [
//   { path: "home", component: HomeComponent, children: [
//     { path: 'child', component: ChildHomeComponent }
//   ] }
// ]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,HomeComponent,
    // ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ArticleModule
    // CommonModule
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
