import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  sendMail() {
    this.http
      .post(
        'https://s10oa5h0ud.execute-api.us-east-1.amazonaws.com/prod/email/',
        {
          names: 'Har Bean, Chase Bear',
          dietRestrictions: 'Give all the food',
          comments: 'Plz give cubes too - har',
        }
      )
      .subscribe(
        (res) => {
          console.log('res : ', res);
        },
        (err) => {
          console.log('err : ', err);
        }
      );
  }
}
