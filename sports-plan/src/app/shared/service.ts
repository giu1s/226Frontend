import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class Service<T> {
  abstract getAll(): Observable<T[]>;
  abstract get(id: number): Observable<T>;
  abstract delete(id: number): Observable<T>;
  abstract update(object: T): Observable<T>;
  abstract create(object: T): Observable<T>;
}