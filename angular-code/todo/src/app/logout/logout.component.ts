import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentificationService } from '../services/hardcoded-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router, private authService : HardcodedAuthentificationService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
