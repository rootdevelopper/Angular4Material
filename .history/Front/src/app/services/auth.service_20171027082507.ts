import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http, private headers) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append
  }

}
