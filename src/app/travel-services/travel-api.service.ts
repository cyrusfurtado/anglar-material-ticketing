import { Injectable } from '@angular/core';
import { AppService } from '../app-service.service';
import { AppGlobals } from '../app.globals';

@Injectable()
export class TravelApiService {

  constructor(private app: AppService) { }



  listFlights(filters){
    let url = `${AppGlobals}/api/flights`;
    return this.app.request(url,'get',null,filters);
  }

  listBuses(filters){
    let url = `${AppGlobals}/api/buses`;
    return this.app.request(url,'get',null,filters);
  }

  listTrains(filters){
    let url = `${AppGlobals}/api/trains`;
    return this.app.request(url,'get',null,filters);
  }

}
