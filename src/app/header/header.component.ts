import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  constructor(protected route: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      this.userName = `${loggedInUserDetails.data.firstName} ${loggedInUserDetails.data.lastName}`;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/login']);
  }
}
