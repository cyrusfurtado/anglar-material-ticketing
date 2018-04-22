import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TravelApiService } from '../travel-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PrintDialogueComponent } from '../components/print-dialogue/print-dialogue.component';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor(private travelapi: TravelApiService, private dialog: MatDialog) { }

  sourceTripControl: FormControl = new FormControl();
  destTripControl: FormControl = new FormControl();

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
      label: "Economy",
      slug: "economy"
  },{
    label: "Second Class",
    slug: "second_class"
  },{
    label: "First Class",
    slug: "first_class"
  }]

  tripSourceOptions = [
    {
      label: "Coimbatore",
      slug: "coimbatore"
    },
    {
        label: "Bengaluru",
        slug: "bengaluru"
        
    },    
    {
      label: "Kolkota",
      slug: "kolkota"
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
      label: "Chennai",
      slug: "chennai"
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
      
      this.travelapi.listTrains(this.filters)
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
