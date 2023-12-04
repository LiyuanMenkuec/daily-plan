import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username='your name';
  password="";
  errorMessage="the username or password is wrong";
  invalidLogin=false;
  

  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService){}

  handleLogin() {
  
    if(!this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin=true;
    }
     
    }



}
