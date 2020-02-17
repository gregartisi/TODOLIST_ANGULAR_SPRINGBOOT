import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor() { }

  authenticate(user, password){
    if(user=="root" && password=="root"){
      sessionStorage.setItem("authenticateUser",user)
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticateUser")
    
      return (user!=null)
    
  }

  logout(){
    sessionStorage.removeItem("authenticateUser");
  }
}
