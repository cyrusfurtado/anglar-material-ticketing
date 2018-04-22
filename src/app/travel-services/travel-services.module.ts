import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import {TravelRoutingModule, travelRoutedComponents } from './travel-routing.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MainsidenavComponent } from './components/mainsidenav/mainsidenav.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelApiService } from './travel-api.service';
import { PrintDialogueComponent } from './components/print-dialogue/print-dialogue.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TravelRoutingModule
  ],
  entryComponents:[PrintDialogueComponent],
  declarations: [travelRoutedComponents, MainsidenavComponent, SidemenuComponent, PrintDialogueComponent],
  providers:[
    TravelApiService
  ]
})
export class TravelServicesModule { }
