import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AirService {

  constructor(private http: HttpClient) { }
}

getAirFromServer() {

  return this.httpClient.get<any>("api.airvisual.com/v2/nearest_city?lat=48.20&lon=4.17&key=Lx9iNW5FznNYqE4Px");

}
