import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  static isUserLoggedIn: any;
  static validLogin: boolean
  
  constructor(){}

  authenticate(username: string, password:string) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="what" && password === 'what') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      HardcodedAuthenticationService.validLogin=true;
      return true;
    }
    HardcodedAuthenticationService.validLogin=false;
    return false;
  }

  isUserLoggedIn() {
   
    return HardcodedAuthenticationService.validLogin;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

  
}
