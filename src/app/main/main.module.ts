import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { routedComponents } from './main-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    FormsModule,
    MainRoutingModule,
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    routedComponents
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class MainModule { }
