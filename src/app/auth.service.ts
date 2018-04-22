import { Injectable } from '@angular/core';
import { AppService } from './app-service.service';
import { AppGlobals } from './app.globals';

@Injectable()
export class AuthService {

  constructor(private app: AppService) { }

  private serverUrl = AppGlobals.serverUrl;

  private isLoggedIn: boolean = false;

  login(user, password){
    return this.app.request(`${this.serverUrl}/api/authenticate`,'post', null, {user: user, password: password})
  }

  register(user, password, firstname, lastname){
    return this.app.request(`${this.serverUrl}/api/register`,'post', null, {username: user, password: password, firstname: firstname, lastname: lastname});
  }

}
