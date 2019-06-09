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
export class InstaService {



  private data:any[];

    constructor(private httpClient: HttpClient) {
     }

     myretryhandler = new HttpMethodRetryHandler();


  getFromServer() {

      return this.httpClient
        .get<instagramInterface>('https://api.instagram.com/v1/users/self/media/recent/?access_token=14328747028.11e9581.89ea81d4fc50446ca21d1d529e1735d8')
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.myretryhandler.handleError) // then handle the error
          );

}
}
interface instagramInterface {
  "data":[]
}
