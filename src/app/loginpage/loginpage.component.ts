import { Component, OnInit } from '@angular/core';
import { Appconstant } from '../appconstant';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = Appconstant.GOOGLE_AUTH_URL;
  facebookURL = Appconstant.FACEBOOK_AUTH_URL;


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
  }
}
