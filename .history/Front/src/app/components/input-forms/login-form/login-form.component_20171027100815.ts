import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services//auth.service';
import { Router } from '@angular/router';
import { } from 'angular2-flash-messages'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // console.log(this.username);
    const user = {
      username: this.username,
      password: this.password
    };
  }

}
