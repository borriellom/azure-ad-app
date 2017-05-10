import { Injectable } from '@angular/core';
import {AdalService} from 'ng2-adal/services/adal.service';
import {AuthHttp} from 'ng2-adal/services/authHttp.service';
import {Observable} from 'rxjs/Rx';
import {IRemoteInfo} from '../home/home.component';
import {Response} from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: AuthHttp) { }

  getRemoteInfo(): Observable<IRemoteInfo>{
      
      return this.http.get('https://localhost:8443/info')
          .map((resp: Response) => resp.json())
          .catch(this.handleError);
  }
  handleError( error: Response ) {
      console.error( error );
      return Observable.throw( error.json().error || 'Server error' );
  }
}
