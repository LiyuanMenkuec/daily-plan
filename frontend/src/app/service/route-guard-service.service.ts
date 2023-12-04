import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService{

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardServiceService).canActivate(next, state);
}
