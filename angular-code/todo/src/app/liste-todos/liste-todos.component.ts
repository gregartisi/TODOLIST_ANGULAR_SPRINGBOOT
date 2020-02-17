import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService, Task } from '../services/data/todo-data.service';

@Component({
  selector: 'app-liste-todos',
  templateUrl: './liste-todos.component.html',
  styleUrls: ['./liste-todos.component.css']
})
export class ListeTodosComponent implements OnInit {

  userId=1
  todos : Task[]
  deleteMessage=''
  deleteSuccess=false
  
  constructor(private router: Router, private route : ActivatedRoute, private service:TodoDataService) { }

  ngOnInit() {
    this.getAllTasks(this.userId);
  }

  getAllTasks(userId){
    this.service.getAllTasksByUser(userId).subscribe(response=>this.handleSuccessResponse(response),error=>this.handleErrorResponse(error));

  }
  handleErrorResponse(error){

  }
  handleSuccessResponse(response) {
    this.todos = response
    console.log(this.todos);
  }

  deleteTask(taskId){
    console.log("deleteTask "+taskId)
    this.service.removeTaskById(taskId).subscribe(response=>this.handleSuccessDeleteResponse(response),error=>this.handleErrorDeleteResponse(error))
    
  }
  handleErrorDeleteResponse(error){
    
  }
  handleSuccessDeleteResponse(response){
    console.log(response)
    this.getAllTasks(1);
    this.deleteSuccess=true
    this.deleteMessage="La tache a ete supprimee."
  }

  updateTask(userId,taskId){
    console.log("updateTask "+taskId)
    this.router.navigate(['update',userId,taskId])
  }

  newTask(userId){
    this.router.navigate(['update',userId,-1])
  }
  
}


