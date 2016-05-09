import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessaggiService {
  constructor(private http: Http) { }

  getMsg() {
    return this.http.get('app/msg.json')
      .map((res: Response) => res.json());

    // return [
    //   { 'id': 11, 'name': 'Chewbacca' },
    //   { 'id': 12, 'name': 'Rey' },
    //   { 'id': 13, 'name': 'Finn (FN2187)' },
    //   { 'id': 14, 'name': 'Han Solo' },
    //   { 'id': 15, 'name': 'Leia Organa' }
    // ];

  }
}