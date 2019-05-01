import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  componentTitle = 'Dashboard';

  constructor(private router: Router, private titleService: Title) {
  }

  OnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/dashboard']);
      this.titleService.setTitle('Dashboard');
    } else {
      this.router.navigate(['/login']);
      this.titleService.setTitle('Login');
    }
  }

  checkAuthentication() {
    if (localStorage.getItem('user')) {
      const loggedInUserDetails = JSON.parse(localStorage.getItem('user'));
      return loggedInUserDetails.data.securityToken;
    }
  }
}
