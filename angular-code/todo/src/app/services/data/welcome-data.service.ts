import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorld{

  constructor(private name:string){}
  getName(){
    return this.name;
  }

}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private auth = this.createBasicHttpHeaders();
  private header = new HttpHeaders({
      Authorization: this.auth,
      
    });
    
  constructor(private http: HttpClient) { 
     
  }

  helloWorldBean(){
    
    return this.http.get<HelloWorld>("http://localhost:8080/hello/Greg",{headers:this.header})
  }

  createBasicHttpHeaders(){
    let username = "root";
    let password = "root";
    let basicAuthHeaderString = "Basic"+ window.btoa(username +':'+ password);

    return basicAuthHeaderString;
  }
}
