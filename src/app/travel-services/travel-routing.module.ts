import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightComponent } from './flight/flight.component';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';
import { AuthGuard } from '../auth-guard.service';

const serviceRoutes: Routes = [
    {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
    },
    {
        path : 'flight',
        component: FlightComponent,
        data: {title: 'Check Flight schedules'},
        canActivate: [AuthGuard]
    },
    {
        path: 'train',
        component: TrainComponent,
        data: {title: 'Check Train schedules'},
        canActivate: [AuthGuard]
    },
    {
        path: 'bus',
        component: BusComponent,
        data: {title: 'Check Bus schedules'},
        canActivate: [AuthGuard]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      serviceRoutes
    )
  ],
  exports: [
    RouterModule
  ],
//   providers: [
//     CanDeactivateGuard,
//   ]
})
export class TravelRoutingModule { }

export const travelRoutedComponents = [FlightComponent, TrainComponent, BusComponent];