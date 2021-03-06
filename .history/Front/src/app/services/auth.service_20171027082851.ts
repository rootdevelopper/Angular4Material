import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Send post request to back end locallhost/3000 this is an obserbable so we can add the 
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .map(res => res.json());
  }

}
