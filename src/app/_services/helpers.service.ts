import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() {
  }

  getLoggedInUserName() {
    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      return `${loggedInUserDetails.data.firstName} ${loggedInUserDetails.data.lastName}`;
    }
  }

  getLoggedInUserId() {
    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      return loggedInUserDetails.data.userId;
    }
  }

  getLoggedInUserToken() {
    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      return loggedInUserDetails.data.securityToken;
    }
  }
}
