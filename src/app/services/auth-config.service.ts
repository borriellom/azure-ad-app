import {Injectable} from '@angular/core';

@Injectable()
export class AuthConfigService {
    
    
    public get adalConfig(): any {
        

        var endpoints = {
                "https://localhost:8443": "[Azure AD Application ID]"
        };
        return {
            tenant: "[Azure AD Tenant GUID]",
            clientId: "[Azure AD Application ID]",
            redirectUri: "https://localhost:4200",
            postLogoutRedirectUrl: "https://localhost:4200",
//            cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            endpoints: endpoints
        };
    }
    
}
