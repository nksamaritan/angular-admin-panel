import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Login} from '../_interface/login';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';
import {HttpHeaders} from '@angular/common/http';
import {Constants} from '../_constants/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private handleError: HandleError;

  constructor(private http: HttpClient, private constants: Constants, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Register');
  }

  register(userDetails): Observable<Login> {
    return this.http.post(`${this.constants.API_URL}/register`, JSON.stringify(userDetails), httpOptions)
      .pipe(
        catchError(this.handleError('register', userDetails))
      );
  }
}
