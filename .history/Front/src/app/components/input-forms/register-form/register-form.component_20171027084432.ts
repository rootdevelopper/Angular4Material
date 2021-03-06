import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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
              private authService: AuthService,
              private router: Router ) { }

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

    // register User - the class is using obserbables so youn can .subscibe
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('User was registered successfully', { cssClass: 'alert-success', timeout: 3000});
      }
    });
  }
}
