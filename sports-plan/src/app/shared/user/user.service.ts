import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';
import { Service } from '../service';


@Injectable({
  providedIn: 'root'
})

export class UserService implements Service<User> {
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

  public getAll(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:10000/api/allusers', this._httpOptions);
  }
  public get(id: number): Observable<User> {
    return this._http.get<User>('http://localhost:10000/api/user/'+id, this._httpOptions);
  }
  public delete(id: number): Observable<User> {
    return this._http.delete<User>('http://localhost:10000/api/user/'+id, this._httpOptions);
  }
  public update(object: User): Observable<User> {
    return this._http.put<User>('http://localhost:10000/api/user', object, this._httpOptions);
  }
  public create(object: User): Observable<User> {
    return this._http.post<User>('http://localhost:10000/api/user', object, this._httpOptions);
  }


  // public getAllUser(): Observable<User[]> {
  //   return this._http.get<User[]>('http://localhost:10000/api/allusers', this._httpOptions);
  // }

  // public getUser(id: number): Observable<User>{
  //   return this._http.get<User>('http://localhost:10000/api/user/'+id, this._httpOptions);
  // }

  // public deleteUser(id: number): Observable<User>{
  //   return this._http.delete<User>('http://localhost:10000/api/user/'+id, this._httpOptions);
  // }

  // public createUser(user: User): Observable<User>{
  //   return this._http.post<User>('http://localhost:10000/api/user', user, this._httpOptions);
  // }
  
  // public updateUser(user: User): Observable<User>{
  //   return this._http.put<User>('http://localhost:10000/api/user', user, this._httpOptions);
  // }
}
