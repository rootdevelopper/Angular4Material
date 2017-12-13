import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onResgisterSubmit() {
  console.log(this.name);
  const user = {
    name: this.name,
    email: this.email,
    username: this.username
  }
  }

}
