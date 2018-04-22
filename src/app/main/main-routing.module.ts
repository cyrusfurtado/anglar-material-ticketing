import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
    { path: '',   redirectTo: '/landing', pathMatch: 'full' },
    {
        path: "landing",
        component: LandingComponent,
        data: {title: "Home"}
    },
    {
        path: "login",
        component: LoginComponent,
        data: {title: "Login"},
        canActivate: [AuthGuard]
    },
    {
        path: "register",
        component: LoginComponent,
        data: {register: true, title: "Register"},
        canActivate: [AuthGuard]
    },
    {
        path: 'services',
        loadChildren: '../travel-services/travel-services.module#TravelServicesModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'logout',
        data: {title: "Logout"},
        component: LogoutComponent
    },
    {
        path: "**",
        component: NotFoundComponent,
        data: {title: "Not Found"},
        canActivate: [AuthGuard]
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
//   providers: [
//     CanDeactivateGuard,
//   ]
})
export class MainRoutingModule { }

export const routedComponents = [ LandingComponent, LoginComponent, NotFoundComponent, LogoutComponent ]