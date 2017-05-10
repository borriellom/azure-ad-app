import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: '**', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
