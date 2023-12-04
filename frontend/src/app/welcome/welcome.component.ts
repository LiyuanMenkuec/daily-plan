import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  username='';
  message="";
  constructor(private route : ActivatedRoute, public hardcodedAuthenticationService:HardcodedAuthenticationService){}
  
  ngOnInit(){
    if(HardcodedAuthenticationService.isUserLoggedIn){
      this.message="You are now logged in and can start managing your plans!";
      
    }
    else{
      this.username=''
      this.message="Before making a plan, you need to log in first!";
    }
    
  }

}
