import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthentificationService } from '../services/hardcoded-authentification.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  //private isLoggedIn:boolean = false
  constructor(private authService : HardcodedAuthentificationService) {


   }

  ngOnInit() {
    //this.isLoggedIn = this.authService.isUserLoggedIn()
  }

}
