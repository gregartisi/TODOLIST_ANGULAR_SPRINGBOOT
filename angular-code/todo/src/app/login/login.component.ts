import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentificationService } from '../services/hardcoded-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "Invalid credentials";
  invalidLogin = false;
  

  constructor(private router : Router, private authService : HardcodedAuthentificationService ) { 
    
  }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    if(this.authService.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin=true
    }
  }
}
