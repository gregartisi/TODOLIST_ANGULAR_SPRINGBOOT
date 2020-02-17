import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthentificationService } from './hardcoded-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RootGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isUserLoggedIn()){return true;}
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
  constructor(private router : Router,private authService : HardcodedAuthentificationService) { 

    
  }
}
