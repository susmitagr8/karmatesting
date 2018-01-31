import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    public http: Http
  ) {}

  getUser(a:string) {
    return this.http.get(`https://conduit.productionready.io/api/profiles/`+a)
    .map((res:Response) => res.json());
  }

}