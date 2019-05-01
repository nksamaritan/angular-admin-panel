import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {Constants} from '../_constants/constants';
import {Contacts} from '../_interface/contacts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private handleError: HandleError;

  constructor(private http: HttpClient, private constants: Constants, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Contacts');
  }

  getList(): Observable<any> {
    return this.http.get(`${this.constants.API_URL}/users?page=2`, httpOptions)
      .pipe(
        catchError(this.handleError('contacts'))
      );
  }
}
