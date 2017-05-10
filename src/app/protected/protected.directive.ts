import { Directive, OnInit } from '@angular/core';
import {AdalService} from 'ng2-adal/services/adal.service';
import {Router} from '@angular/router';

@Directive({
  selector: '[protected]'
})
export class ProtectedDirective implements OnInit {

  constructor(private adalService: AdalService, private router: Router) { }

  ngOnInit(){
      console.log('Entering protected');
      if(!this.adalService.userInfo.isAuthenticated){
        this.router.navigate(['/welcome']);
      }
  }
  
}
