import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  onLoginSubmit() {
    //console.log(this.username);
    const user = {
      username: this.username,
      password: this.password
    }
  }

}
