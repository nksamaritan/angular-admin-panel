import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {Constants} from './_constants/constants';
import {HttpErrorHandler} from './_services/http-error-handler.service';
import {MessageService} from './_services/message.service';
import {MessagesComponent} from './messages/messages.component';
import {MustMatchDirective} from './_helpers/must-match.directive';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HelpersService} from './_services/helpers.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    MustMatchDirective,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ChangePasswordComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Constants, HttpErrorHandler, MessageService, {provide: APP_BASE_HREF, useValue: 'http://localhost:4200'}, HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
