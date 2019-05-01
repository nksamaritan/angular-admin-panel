import {HttpHeaders} from '@angular/common/http';

export class Constants {
  API_URL: string;
  HTTP_HEADERS: object;

  constructor() {
    this.API_URL = 'http://dev.leadapp.com/api/v1';
    this.HTTP_HEADERS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
      })
    };
  }
}
