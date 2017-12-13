import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile-data',
  templateUrl: './userprofile-data.component.html',
  styleUrls: ['./userprofile-data.component.css']
})
export class UserprofileDataComponent implements OnInit {

  user: Object;
  constructor( private authService: AuthService,
               private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
  
  );
  }

}
