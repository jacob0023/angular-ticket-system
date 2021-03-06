import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  login = this._authService.isLogin;
  constructor(private _authService:AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = this._authService.getSession();

    if (!token){
      this.login = false;
      console.log(this.login)
      return false
    }
    this.login = true;
    console.log(this.login)
    return true;
  }

}
