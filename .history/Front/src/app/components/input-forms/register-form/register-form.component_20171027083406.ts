import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
// set properties for the register input form

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              ) { }

  ngOnInit() {
  }

  onResgisterSubmit() {
  console.log(this.name);
  const user = {
    name: this.name,
    email: this.email,
    username: this.username,
    password: this.password
    };

    // required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('please fill in all the fields', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('please provide a valid e mail', { cssClass: 'alert-danger', timeout: 3000});
    return false;
    }

    // register User
  }
}
