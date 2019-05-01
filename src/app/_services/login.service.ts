import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../_constants/constants';
import {Login} from '../_interface/login';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError: HandleError;

  constructor(private http: HttpClient, private constants: Constants, private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Login');
  }

  login(loginDetails): Observable<Login> {
    return this.http.post(`${this.constants.API_URL}/login`, loginDetails, this.constants.HTTP_HEADERS)
      .pipe(
        catchError(this.handleError('login', loginDetails))
      );
  }
}
