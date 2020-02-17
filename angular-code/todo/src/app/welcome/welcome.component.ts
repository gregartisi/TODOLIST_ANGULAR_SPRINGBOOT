import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome = 'Welcome to your TODO list!'
  name=''
  
  constructor(private route : ActivatedRoute, private service:WelcomeDataService) {
    
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.helloWorldBean().subscribe(response=>this.handleSuccessResponse(response),error=>this.handleErrorResponse(error));

  }
  handleErrorResponse(error) {
    console.log(error.error);
    this.welcome = error.error.message;
  }

  handleSuccessResponse(response){
    this.welcome= 'Hello '+response.name+'. Welcome to your TODO list!'
  }
}
