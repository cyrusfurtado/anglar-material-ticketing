import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AppService } from '../../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private app: AppService, private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  user: string;
  password: string;
  firstname: string;
  lastname: string;
  registerView: boolean = false;

  ngOnInit() {
    // this.login();
    this.route.data.subscribe(data => {
      console.log("data", data);
      if(data && data.register){
        this.registerView = data.register;
      }
    });
  }

  invalidRegister = false;
  invalidLogin = false;
  rememberMe = true;

  login(){
    this.invalidLogin = false;
    if(this.user && this.password){
      this.auth.login(this.user, this.password)
      .then((res) => {
        console.log("res", res);
        if(res.status === 'success'){
          this.app.setItem('userdetails',res.data)
                .then(() => {
                  console.log("hurray login success")
                  this.router.navigate(['/services'])
                })
                .catch((err) => {
                  console.warn(err);
                  this.invalidLogin = true;
                });

        }
        else{
          console.warn("login err");
          this.invalidLogin = true;
        }
      })
      .catch((err) => {
        console.warn("err",err);
        this.invalidLogin = true;
      });
    }
    else{
      alert("incorrect user details")
    }

  }

  register(){
    this.invalidRegister = false;
    if(this.user && this.password && this.firstname && this.lastname){
      this.auth.register(this.user, this.password,this.firstname,this.lastname)
      .then((res) => {
        console.log("res", res);
        if(res.status === 'success'){
          console.log("register success")
          this.login();
        }
        else{
          console.log("register error");
          this.invalidRegister = true;
        }
      })
      .catch((err) => {
        console.warn("err",err);
        this.invalidRegister = true;
      });
    }
    else{
      alert("incorrect registration details")
      this.invalidRegister = true;
    }
  }
}
