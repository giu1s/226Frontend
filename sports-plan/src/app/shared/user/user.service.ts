import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, DELETE',
      'Access-Control-Allow-Origin': 'http://localhost:10000'
    })
  }
  
  constructor(private _http: HttpClient) {
    
   }


  public getAllUser(): Observable<any> {
    return this._http.get<any>('http://localhost:10000/api/allusers', this._httpOptions );

  }
}
