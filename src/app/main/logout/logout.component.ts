import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private app: AppService, private router: Router) { }

  ngOnInit() {
    this.app.clearItem("userdetails")
          .then(() => {
            this.router.navigate(['/landing']);
          })
  }

}
