import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListeTodosComponent } from './liste-todos/liste-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RootGuardService } from './services/root-guard.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'welcome/:name', component: WelcomeComponent , canActivate:[RootGuardService]},
  {path : 'todos', component: ListeTodosComponent  , canActivate:[RootGuardService]},
  {path : 'logout',component : LogoutComponent, canActivate:[RootGuardService]},
  {path : 'update/:userId/:id',component : TodoComponent, canActivate:[RootGuardService]},
  {path : 'create',component : TodoComponent, canActivate:[RootGuardService]},
  {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
