import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;
  isLogged = new Subject<boolean>();
  islog : any ;

  url= 'http://localhost:8000/api/login';


  constructor(private _httpClient:HttpClient) { }


  login(credential: any): any {
    this.isLogin = false;
    if(credential != ''){
      this.isLogin = true;
    }
    this.isLogged.next(this.isLogin);
    return this._httpClient.post(this.url, credential);
  }

  logout() {
    // window.localStorage.clear();
    localStorage.setItem('islog',this.islog = 'false');
    localStorage.removeItem('authToken');
  }

  setSession(token : string){
    localStorage.setItem('islog',this.islog = 'true');
    localStorage.setItem('authToken',token);
  }


  getSession(){
   return localStorage.getItem('authToken');
  }
}