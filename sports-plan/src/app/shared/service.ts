import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Service<T> {
   getAll(): Observable<T[]>;
   get(id: number): Observable<T>;
   delete(id: number): Observable<T>;
   update(object: T): Observable<T>;
   create(object: T): Observable<T>;
}