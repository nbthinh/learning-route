import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
// import { ChildHomeComponent } from './home/child-home/child-home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

import { FormsModule } from '@angular/forms';


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
    ArticleDetailEditComponent,
    TestComponent,
    // ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // ArticleModule
    // CommonModule
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
