import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ChangePasswordService} from '../_services/change-password.service';
import {HelpersService} from '../_services/helpers.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userPasswordDetails = {
    old_password: '',
    new_password: '',
    confirm_new_password: '',
    token: '',
    user_id: ''
  };

  constructor(private changePasswordService: ChangePasswordService,
              private appComponent: AppComponent) {
    this.appComponent.componentTitle = 'Change Password';
  }

  errors: [];
  message: string;

  ngOnInit() {
  }

  changePassword(passwordDetails: NgForm) {
    this.userPasswordDetails.old_password = passwordDetails.value.old_password;
    this.userPasswordDetails.new_password = passwordDetails.value.new_password;

    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      this.userPasswordDetails.token = loggedInUserDetails.data.securityToken;
      this.userPasswordDetails.user_id = loggedInUserDetails.data.userId;
    }

    this.changePasswordService.changePassword(this.userPasswordDetails)
      .subscribe(
        res => this.handleSubmitSuccess(res)
      );
  }

  handleSubmitSuccess(response) {
    if (response.statusCode === '1') {
      this.message = response.message;
      this.errors = [];
    } else {
      this.errors = response.errors;
      this.message = '';
    }
  }
}
