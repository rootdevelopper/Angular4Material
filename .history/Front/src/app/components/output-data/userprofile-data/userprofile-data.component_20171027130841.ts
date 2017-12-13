import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile-data',
  templateUrl: './userprofile-data.component.html',
  styleUrls: ['./userprofile-data.component.css']
})
export class UserprofileDataComponent implements OnInit {

  constructor( private ) { }

  ngOnInit() {
  }

}
