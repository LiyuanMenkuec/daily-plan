import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// src/app/app.module.ts
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { TheContentComponent } from './the-content/the-content.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { AuthGuard } from './service/route-guard-service.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'your_plan/:name',canActivate: [AuthGuard], component: TheContentComponent },
  {path:'todos/:name',canActivate: [AuthGuard],component:ListTodosComponent},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
