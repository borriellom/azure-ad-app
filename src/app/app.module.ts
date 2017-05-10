import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigService } from './services/auth-config.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AdalService } from 'ng2-adal/services/adal.service';
import { ProtectedDirective } from './protected/protected.directive';
import { ApiService } from './services/api.service';
import { AuthHttp } from 'ng2-adal/services/authHttp.service';
import { AuthGuard } from './services/auth.guard';


@NgModule( {
    declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent,
        ProtectedDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        AuthConfigService, 
        AdalService, 
        ApiService, 
        AuthHttp, 
        AuthGuard, 
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
