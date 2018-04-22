import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import { AppService } from './app-service.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private app: AppService, private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let url: string = state.url;
    console.log("url",url);

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Promise<boolean> {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Promise<boolean> {
    console.log("checking login for:", url);
    return new Promise((resolve, reject) => {
      this.app.getItem("userdetails")
      .then((details) => {
        console.log("userdetails", details) 
        if(details){ // if user is logged in
          if(url.search(/^\/login/) === 0 || url.search(/^\/register/) === 0){
            let navigationExtras: NavigationExtras = {
              queryParams: { 'session_id': 456 },
              fragment: 'anchor'
            };
        
            // Navigate to the login page with extras
            this.router.navigate(['/services'], navigationExtras);
            reject(false);

          }
          else{
            resolve(true);
          }
      
        }
        else{ // if not logged in
          if(url.search(/^\/login/) === 0 || url.search(/^\/register/) === 0){
            resolve(true);
          }
          else{
            this.router.navigate(['/login']);
            resolve(false);
          }
        }
      })
      .catch(() => {
        this.router.navigate(['/landing']);
        reject(false);
      })
    })



  }
}
