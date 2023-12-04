import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  static isUserLoggedIn: any;
  static validLogin: boolean;
  
  constructor(){
    HardcodedAuthenticationService.validLogin=false;
  }

  authenticate(username: string, password:string) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="what" && password === 'what') {
      //console.log('after ' + this.isUserLoggedIn());
      HardcodedAuthenticationService.validLogin=true;
      return true;
    }
    else{
      HardcodedAuthenticationService.validLogin=false;
    return false;
    }
    
  }

  isUserLoggedIn() {
   
    return HardcodedAuthenticationService.validLogin;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

  
}
