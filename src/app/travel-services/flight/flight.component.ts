import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TravelApiService } from '../travel-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PrintDialogueComponent } from '../components/print-dialogue/print-dialogue.component';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private travelapi: TravelApiService, private dialog: MatDialog) { }

  sourceTripControl: FormControl = new FormControl();
  destTripControl: FormControl = new FormControl();

  tripSource;
  tripDest;
  tripStartDate;
  tripEndDate;

  // disableButton(){
  //   console.log("trip source", this.tripSource);
  //   return !this.tripSource || !this.tripDest
  // }

  tripType = [
    {
      label: "One Way",
      slug: "one_way"
    },
    {
      label: "Round Trip",
      slug: "round_trip"
    },
    {
      label: "Multi City",
      slug: "multi_city"
    }
  ]
  tripPassengers = []
  tripClass = [
    {
      label: "Economy",
      slug: "economy"
  },{
    label: "Business",
    slug: "business"
  },{
    label: "First Class",
    slug: "first_class"
  }]

  tripSourceOptions = [
    {
      label: "Mumbai",
      slug: "mumbai"
    },
    {
        label: "Goi",
        slug: "goi"
    },
    {
        label: "Kolkota",
        slug: "kolkota"
    },
    {
      label: "Bengaluru",
      slug: "bengaluru"
    }
  ]

  tripDestOptions = [
    {
      label: "Delhi",
      slug: "delhi"
    },
    {
        label: "Hyderabad",
        slug: "hyderabad"
    },
    {
      label: "Chennai",
      slug: "chennai"
    },
    {
      label: "Surat",
      slug: "surat"
    }
  ]

  flightData = [];

  ngOnInit() {
  }

  minDate = new Date();

  filters:any = {};
  getFlights(){
    console.log("this.filters", this.filters)
    if( this.filters.tripSource && this.filters.tripDest && this.filters.tripStartDate && this.filters.tripEndDate){


      if(typeof this.filters.tripStartDate === 'object' && typeof this.filters.tripEndDate === 'object' && this.filters.tripStartDate.getTime() <= this.filters.tripEndDate.getTime()){
        
        this.travelapi.listFlights(this.filters)
        .then((result) => {
          if(result.status === 'success'){
            this.flightData = result.data;
          }
  
        })
        .catch(() => {
  
        });
      }
      else{
        this.filters.tripStartDate = '';
        this.filters.tripEndDate = '';
      }

    }
    else{
      // this.filters.tripSource = ''; 
      // this.filters.tripDest = '';
      this.filters.tripStartDate = ''; 
      this.filters.tripEndDate = '';
    }

  }

  openPrintDialogue(flightdata){
    let dialogRef = this.dialog.open(PrintDialogueComponent, {
      width: '50%',
      backdropClass: 'print-dailogue',
      // height:"90%",
      data: flightdata
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  

}
