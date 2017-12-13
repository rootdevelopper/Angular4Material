import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../../services/validate.service/re';

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

  constructor(private validateService: ValidateService) { }

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
  }
  if(!this.validateService.validateRegister(user)){
    console.log('Please fill in all the fields');
  }
}
