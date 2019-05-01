import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../_services/login.service';
import {Login} from '../_interface/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  loginResponse: Login;

  error = {
    username_id: true,
    password: true
  };

  constructor(private loginService: LoginService, protected route: Router) {
  }

  ngOnInit() {
  }

  // this method will login the user
  loginUser(loginForm: NgForm) {

    this.user.username = loginForm.value.username;
    this.user.password = loginForm.value.password;

    // call the login service
    this.loginService.login(this.user)
      .subscribe(res => {
        if (res.statusCode) {
          this.loginResponse = res;
          localStorage.setItem('user', JSON.stringify(this.loginResponse));
          if (localStorage.getItem('user')) {
            this.route.navigate(['/dashboard']);
          }
        }
      });
  }
}
