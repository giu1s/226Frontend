import { Observable } from "rxjs";


// interface which contains all methods for a service
export interface Service<T> {
   getAll(): Observable<T[]>;
   get(id: number): Observable<T>;
   delete(id: number): Observable<T>;
   update(object: T): Observable<T>;
   create(object: T): Observable<T>;
}