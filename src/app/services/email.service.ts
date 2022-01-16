import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  sendMail(data: any) {
    this.http
      .post(
        'https://s10oa5h0ud.execute-api.us-east-1.amazonaws.com/prod/email/',
        data
      )
      .toPromise()
        .then(
          response => {
            console.log(response)
          },
          err => {
            console.error('Oh NO!', err)
          }
        )
  }
}
