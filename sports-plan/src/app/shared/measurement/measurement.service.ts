import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Measurement } from './measurement.model';


@Injectable({
  providedIn: 'root'
})

export class MeasurementService {

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


  public getAllMeasurement(): Observable<Measurement[]> {
    return this._http.get<Measurement[]>('http://localhost:10000/api/allmeasurement', this._httpOptions);
  }

  public getMeasurement(id: number): Observable<Measurement>{
    return this._http.get<Measurement>('http://localhost:10000/api/measurement/'+id, this._httpOptions);
  }

  public deleteMeasurement(id: number): Observable<Measurement>{
    return this._http.delete<Measurement>('http://localhost:10000/api/measurement/'+id, this._httpOptions);
  }

  public createMeasurement(measurement: Measurement): Observable<Measurement>{
    return this._http.post<Measurement>('http://localhost:10000/api/measurement',measurement, this._httpOptions);
  }
  
  public updateMeasurement(measurement: Measurement): Observable<Measurement>{
    return this._http.put<Measurement>('http://localhost:10000/api/measurement',measurement, this._httpOptions);
  }
}
