import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-service.service";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private app: AppService) { }

  loggeInUser: string;

  ngOnInit() {

    this.app.getItem("userdetails")
          .then((data: any) => {
              if(data && data.username){
                this.loggeInUser = data.username;
              }
          })
          .catch((err) => {

          })
  }

}
