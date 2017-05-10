import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';
import { AuthConfigService } from './services/auth-config.service';


@Component( {
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
} )
export class AppComponent implements OnInit {
    constructor( private adalService: AdalService, private authConfService: AuthConfigService ) {
        this.adalService.init(this.authConfService.adalConfig);
    }

    ngOnInit(){
        this.adalService.handleWindowCallback();
        this.adalService.getUser();
    }
    
    
}
