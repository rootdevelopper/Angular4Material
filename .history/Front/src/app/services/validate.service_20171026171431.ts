import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
if ( user.name === undefined ||
     user.username === undefined ||
     user.email === undefined ||
     user.name === undefined ) {

}else{

}
  }
}
