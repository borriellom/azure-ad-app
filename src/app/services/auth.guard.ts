import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AdalService} from 'ng2-adal/services/adal.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
   constructor(private adalService: AdalService) {
	
} 
  canActivate(){
      if(this.adalService.userInfo.isAuthenticated){
          return true;
      } else {
          this.adalService.login();
          return false;
      }
      
      
  }
    
}
