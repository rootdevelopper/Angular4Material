import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services//auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService,
              private flashMessages: FlashMessagesService,
              private router: Router
            ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // console.log(this.username);
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      // console.log(data);
      if (data.success) {

      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout:});
      }
    });
  }

}
