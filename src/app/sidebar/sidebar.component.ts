import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HelpersService} from '../_services/helpers.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private titleService: Title, private helperService: HelpersService) {
  }

  ngOnInit() {
  }

  public setTitle( pageTitle: string) {
    this.titleService.setTitle( pageTitle );
  }
}
