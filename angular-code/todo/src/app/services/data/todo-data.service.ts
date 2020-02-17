import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorld } from './welcome-data.service';


export class Task{

  constructor(private id : number,private userId:number, private definition:string,  private deadline: Date, private done: Boolean){}

}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  private auth = this.createBasicHttpHeaders();
  private header = new HttpHeaders({
      Authorization: this.auth
    });

  constructor(private http: HttpClient) { 
     
  }

  getTaskById(taskId){
    return this.http.get<Task>("http://localhost:8080/tasks/"+taskId,{headers:this.header})
  }
  getAllTasksByUser(userId){
    


    return this.http.get<Task[]>("http://localhost:8080/users/"+userId+"/tasks",{headers:this.header})
  }

  removeTaskById(taskId){
    
    return this.http.delete<Task>("http://localhost:8080/tasks/"+taskId+"/remove",{headers:this.header})
  }

  updateTask(task) {
    return this.http.put<Task>("http://localhost:8080/tasks/update",task,{headers:this.header})
  }

  saveTask(task) {
    return this.http.post<Task>("http://localhost:8080/tasks/save",task,{headers:this.header})
  }

  createBasicHttpHeaders(){
    let username = "root";
    let password = "root";
    let basicAuthHeaderString = "Basic"+ window.btoa(username +':'+ password);

    return basicAuthHeaderString;
  }
}
