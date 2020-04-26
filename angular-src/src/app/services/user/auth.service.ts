import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient,
    public jwtHelper: JwtHelperService
    ) { }

  registerUser(user) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<data>(environment.serverUrl + '/users/register', user, {headers: headers});
  }

  getAllUsers() {
    return this.http.get<users>(environment.serverUrl + '/users/getAll');
  }

  getAllInternalUsers() {
    return this.http.get<users>(environment.serverUrl + '/users/getInternal');
  }

  authenticateUser(user) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<data>(environment.serverUrl + '/users/authenticate', user, {headers: headers});
  }

  getProfile() {
    return this.http.get<profile>(environment.serverUrl + '/users/profile');
  }

  checkForRelog() {
    return this.http.get<data>(environment.serverUrl + '/users/checkForRelog');
  }

  logout() {
    return this.http.get<data>(environment.serverUrl + '/users/logout')
  }

  storeUserData(token) {
    localStorage.setItem('id_token', token);
    sessionStorage.setItem('token', token);
  }

  loggedIn() {
    return false;
    if(localStorage.getItem('id_token') === 'placeholder') {
      return true; //Muss an dieser Stelle true returnen, da die Funktion 'isTokenExpired()' prüft, ob das Token abgelaufen ist. 
    } else {
      return this.jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
    }
  }

  isAdmin() {
    if(localStorage.getItem('id_token') === 'placeholder'){
      return false;
    } else {
      if (this.jwtHelper.decodeToken(localStorage.getItem('id_token')).data.user.isAdmin === true) {
        return true;
      } else {
        return false;
      }
    }    
  }

  

}

interface users {
  users: any,
  success: Boolean
}

interface data {
  success: Boolean,
  token: string,
  msg: string,
  userId
}

interface profile {
  user: any
}