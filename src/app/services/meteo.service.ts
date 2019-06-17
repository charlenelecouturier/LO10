import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class MeteoService {
public meteo:any;
    constructor(private httpClient: HttpClient) {
     }



     getMeteoFromServer() {

       return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/weather?lat=48.1958&lon=4.1686&APPID=98390e412efe7676508d16f0d4c1e10e&units=metric');

   }
 }
