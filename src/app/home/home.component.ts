import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';

export interface IRemoteInfo{
    
    id: string,
    content: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    info: IRemoteInfo;
    roles: string[];
    
  constructor(private adalService: AdalService, private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
      console.log('entering welcome')
      this.apiService.getRemoteInfo().subscribe(info => this.info = info );
      this.roles = this.adalService.userInfo.profile.roles;
  }

  logout(){
      this.adalService.logOut();
  }
  
}



