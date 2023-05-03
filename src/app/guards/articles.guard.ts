import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, of, pluck } from 'rxjs';
import { ArticleDetailEditComponent } from '../article-detail-edit/article-detail-edit.component';
import { AuthService } from '../services/auth.service';
import { CheckDeactivate } from '../services/check-deactivate';

@Injectable({
  providedIn: 'root'
})
export class ArticlesGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<CheckDeactivate> {
  constructor(private readonly authService: AuthService){

  }
  canDeactivate(component: CheckDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.currentUser.pipe(map(user => !!user));
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.currentUser.pipe(map(user => !!user));
    // return of(false);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const target_slug = childRoute.params["slug"];
    if (!target_slug){
      return of(false);
    }
    let checker = this.authService.currentUser.pipe(map(user => user.articles.includes(target_slug)));
    return checker;
  }
  
}