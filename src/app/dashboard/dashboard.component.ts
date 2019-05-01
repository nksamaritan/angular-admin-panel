import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../_services/dashboard.service';
import {HelpersService} from '../_services/helpers.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardDetails = {
    todayFollowUps: '',
    upcomingFollowUps: '',
    overdueFollowUps: '',
    LeadConverted: '',
  };

  constructor(private dashboard: DashboardService,
              private helpers: HelpersService,
              private appComponent: AppComponent) {
    this.appComponent.componentTitle = 'Dashboard';
  }

  ngOnInit() {
    this.getDashboardDetails();
  }

  getDashboardDetails() {

    const userDetails = {
      token: this.helpers.getLoggedInUserToken(),
      user_id: this.helpers.getLoggedInUserId(),
    };

    this.dashboard.dashboardCount(userDetails).subscribe(res => {
      if (res.statusCode) {
        this.dashboardDetails.todayFollowUps = res.data.todayFollowUps;
        this.dashboardDetails.upcomingFollowUps = res.data.upcomingFollowUps;
        this.dashboardDetails.overdueFollowUps = res.data.overdueFollowUps;
        this.dashboardDetails.LeadConverted = res.data.LeadConverted;
      }
    });
  }
}
