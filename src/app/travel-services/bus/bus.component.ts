import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TravelApiService } from '../travel-api.service';
import { MatDialog } from '@angular/material';
import { PrintDialogueComponent } from '../components/print-dialogue/print-dialogue.component';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  sourceTripControl: FormControl = new FormControl();
  destTripControl: FormControl = new FormControl();

  constructor(private travelapi: TravelApiService, private dialog: MatDialog) { }
  
  tripSource;
  tripDest;
  tripStartDate;
  tripEndDate;

  ngOnInit() {
  }

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
      label: "Sleeper",
      slug: "sleeper"
  },{
    label: "AC Sleeper",
    slug: "ac_sleeper"
  },{
    label: "Volvo",
    slug: "volvo"
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
      label: "nagpur",
      slug: "Nagpur"
    },
    {
      label: "Gwalior",
      slug: "gwalior"
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
      label: "Patna",
      slug: "patna"
    },
    {
      label: "Surat",
      slug: "surat"
    },
    {
      label: "Jaipur",
      slug: "jaipur"
    }
  ]
  tripData = [];
  minDate = new Date();

  filters:any = {};
  getDepartures(){
    console.log("this.filters", this.filters)
    if( this.filters.tripSource && this.filters.tripDest && this.filters.tripStartDate && this.filters.tripEndDate){
      
      
      if(typeof this.filters.tripStartDate === 'object' && typeof this.filters.tripEndDate === 'object' && this.filters.tripStartDate.getTime() <= this.filters.tripEndDate.getTime()){
      
      this.travelapi.listBuses(this.filters)
      .then((result) => {
        if(result.status === 'success'){
          this.tripData = result.data;
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

  openPrintDialogue(tripData){
    let dialogRef = this.dialog.open(PrintDialogueComponent, {
      width: '50%',
      backdropClass: 'print-dailogue',
      // height:"90%",
      data: tripData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }



}
