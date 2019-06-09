import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, throwError } from 'rxjs';
import {HttpMethodRetryHandler} from '../http-method-retry-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MeteoService {
public meteo:any;
    constructor(private httpClient: HttpClient) {
     }
     myretryhandler = new HttpMethodRetryHandler();



     getMeteoFromServer() {

       return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/weather?lat=48.1958&lon=4.1686&APPID=98390e412efe7676508d16f0d4c1e10e&units=metric')
       .pipe(
           retry(3), // retry a failed request up to 3 times
           catchError(this.myretryhandler.handleError) // then handle the error
         );
   }
 }
