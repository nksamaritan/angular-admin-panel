import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../_constants/constants';
import {ChangePassword} from '../_interface/change-password';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ChangePasswordService {

  private handleError: HandleError;

  constructor(private http: HttpClient, private constants: Constants, private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ChangePassword');
  }

  changePassword(userPasswordDetails): Observable<ChangePassword> {
    return this.http.post(`${this.constants.API_URL}/change-password`, userPasswordDetails, httpOptions)
      .pipe(
        catchError(this.handleError('change-password', userPasswordDetails))
      );
  }
}
