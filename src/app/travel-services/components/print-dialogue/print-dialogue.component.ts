import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
// import { PrintDialogueComponent } from '../components/print-dialogue/print-dialogue.component';


@Component({
  selector: 'app-print-dialogue',
  templateUrl: './print-dialogue.component.html',
  styleUrls: ['./print-dialogue.component.css']
})
export class PrintDialogueComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(
    public dialogRef: MatDialogRef<PrintDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    var mapProp = {
      center: new google.maps.LatLng(20.5937, 78.9629),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var flightPath = new google.maps.Polyline({
      path: this.data.details.route,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);
  }

  print(){
    
  }

}
