import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService, Task } from '../services/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private userId;
  private id;
  private task;
  private saveSuccess = false;
  saveMessage=''

  constructor(private router : Router,private route : ActivatedRoute,private service:TodoDataService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId']
    this.id = this.route.snapshot.params['id']
    //appeller un service
      if(this.id !=-1){
        this.service.getTaskById(this.id).subscribe(response=>this.handleSuccessResponse(response),error=>this.handleErrorResponse(error));
      }else{
        this.task=new Task(-1,this.userId, '',new Date() , false)
      }
    }
  handleErrorResponse(error) {
    
  }
  handleSuccessResponse(response) {
    this.task=response
  }

  saveTodo(){
    console.log("id: "+this.id)
    
    if (this.id == -1){
      //create
      this.service.saveTask(this.task).subscribe(response=>this.handleSuccessUpdateResponse(response),error=>this.handleErrorUpdateResponse(error));
    }else{
      console.log("\ndefinition: "+this.task.definition)
      console.log("\ndeadline: "+this.task.deadline)
      this.service.updateTask(this.task).subscribe(response=>this.handleSuccessUpdateResponse(response),error=>this.handleErrorUpdateResponse(error));
    }
    
  
  }
  handleErrorUpdateResponse(error) {
    throw new Error("Method not implemented.");
  }
  handleSuccessUpdateResponse(response) {
    console.log(response)
    this.task=response;
    this.router.navigate(['todos'])
    /*this.saveSuccess=true
    this.saveMessage="La tache a ete sauvee."*/
  }
}
