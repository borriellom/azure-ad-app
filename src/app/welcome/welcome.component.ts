import { Component, OnInit } from '@angular/core';
import {AdalService} from 'ng2-adal/services/adal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private adalService: AdalService, private router: Router) {
  }

  ngOnInit() {
      console.log('entering welcome');
      let authenticated = this.adalService.userInfo.isAuthenticated;
      console.log('Authenticated: ' + authenticated);
      if(authenticated){
        this.router.navigate(['home']);
      }
  }
  
  login(){
      
      console.log('login');
      this.adalService.login();
  }
  

}
