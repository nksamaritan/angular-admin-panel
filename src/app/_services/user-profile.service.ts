import {Injectable} from '@angular/core';
import {Constants} from '../_constants/constants';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserProfile} from '../_interface/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private handleError: HandleError;

  constructor(private constant: Constants, private http: HttpClient, private httpHandleError: HttpErrorHandler) {
    this.handleError = this.httpHandleError.createHandleError('User-profile');
  }

  getUserProfileDetails(postParams): Observable<UserProfile> {
    return this.http.post(`${this.constant.API_URL}/user_profile`, JSON.stringify(postParams), this.constant.HTTP_HEADERS)
      .pipe(
        catchError(this.handleError('User-Profile', postParams))
      )
      ;
  }

  updateUserProfile(postParams): Observable<UserProfile> {
    return this.http.post(`${this.constant.API_URL}/udpate_user_profile`, JSON.stringify(postParams), this.constant.HTTP_HEADERS)
      .pipe(
        catchError(this.handleError('Update User Profile', postParams))
      );
  }
}
