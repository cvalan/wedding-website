import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
