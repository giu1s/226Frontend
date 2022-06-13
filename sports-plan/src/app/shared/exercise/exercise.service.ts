import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Exercise } from './exercise.model';

@Injectable({
    providedIn: 'root'
  })

export class ExerciseService {

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

    public getAllExercise(): Observable<Exercise[]> {
        return this._http.get<Exercise[]>('http://localhost:10000/api/allexercise', this._httpOptions);
    }

    public getExercise(id: number): Observable<Exercise>{
        return this._http.get<Exercise>('http://localhost:10000/api/exercise/'+id, this._httpOptions);
    }

    public deleteExercise(id: number): Observable<Exercise>{
        return this._http.delete<Exercise>('http://localhost:10000/api/exercise/'+id, this._httpOptions);
    }

    public createExercise(exercise: Exercise): Observable<Exercise>{
        return this._http.post<Exercise>('http://localhost:10000/api/exercise',exercise, this._httpOptions);
    }

    public updateExercise(exercise: Exercise): Observable<Exercise>{
        return this._http.put<Exercise>('http://localhost:10000/api/exercise',exercise, this._httpOptions);
      }
}
