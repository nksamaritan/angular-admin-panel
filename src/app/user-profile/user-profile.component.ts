import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../_services/user-profile.service';
import {HelpersService} from '../_services/helpers.service';
import {NgForm} from '@angular/forms';

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
    user_id: ''
  };

  constructor(private userProfileService: UserProfileService, private helpers: HelpersService) {

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
        if (res.statusCode) {
          this.assignUserDetails((res));
        }
      }
    );
  }
}
