import {Injectable} from '@angular/core';

@Injectable()
export class AuthConfigService {
    
    
    public get adalConfig(): any {
        

        var endpoints = {
                "https://localhost:8443": "bd1e65e4-095a-4491-8b78-834d90a76a41"
        };
        return {
            tenant: "martaborriellogmail.onmicrosoft.com",
            clientId: "bd1e65e4-095a-4491-8b78-834d90a76a41",
            redirectUri: "http://angular-azure-ad.azurewebsites.net",
            postLogoutRedirectUrl: "http://angular-azure-ad.azurewebsites.net",
//            cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            endpoints: endpoints
        };
    }
    
}
