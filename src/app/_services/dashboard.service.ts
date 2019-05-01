import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';
import {Constants} from '../_constants/constants';
import {Dashboard} from '../_interface/dashboard';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private handleError: HandleError;

  constructor(private constant: Constants, private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Dashboard');
  }

  dashboardCount(userDetails): Observable<Dashboard> {
    return this.http.post(`${this.constant.API_URL}/dashboard`, userDetails, this.constant.HTTP_HEADERS)
      .pipe(
        catchError(this.handleError('dashboard', userDetails))
      );
  }
}
