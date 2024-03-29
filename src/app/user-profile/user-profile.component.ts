import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../_services/user-profile.service';
import {HelpersService} from '../_services/helpers.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile_no: '',
    userType: '',
    user_id: '',
    token: this.helpers.getLoggedInUserToken()
  };

  message: string;
  errors: [];

  constructor(private userProfileService: UserProfileService,
              private helpers: HelpersService,
              private appComponent: AppComponent) {
    this.appComponent.componentTitle = 'User Profile';

  }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    const userDetails = {
      user_id: this.helpers.getLoggedInUserId(),
      token: this.helpers.getLoggedInUserToken()
    };

    this.userProfileService.getUserProfileDetails(userDetails).subscribe(
      res => {
        if (res.statusCode) {
          this.assignUserDetails(res);
        }
      }
    );
  }

  assignUserDetails(userDetails) {
    this.userDetails.firstName = userDetails.collection[0].first_name;
    this.userDetails.lastName = userDetails.collection[0].last_name;
    this.userDetails.username = userDetails.collection[0].user_name;
    this.userDetails.email = userDetails.collection[0].email;
    this.userDetails.mobile_no = userDetails.collection[0].contact;
    this.userDetails.userType = userDetails.collection[0].role;
    this.userDetails.user_id = userDetails.collection[0].user_id;
  }

  updateUser() {
    this.userProfileService.updateUserProfile(this.userDetails).subscribe(
      res => {
        this.handleRequestResponse(res);
      }
    );
  }

  handleRequestResponse(response) {
    if (response.statusCode === '1') {
      this.message = 'Profile has been successfully updated.';
      this.assignUserDetails(response);
      this.errors = [];
    } else {
      this.errors = response.errors;
      this.message = '';
    }
  }
}
