import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
// import { ChildHomeComponent } from './home/child-home/child-home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


// const routes: Routes = [
//   { path: "home", component: HomeComponent, children: [
//     { path: 'child', component: ChildHomeComponent }
//   ] }
// ]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
