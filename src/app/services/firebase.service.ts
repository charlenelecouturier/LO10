import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, throwError } from 'rxjs';
import {HttpMethodRetryHandler} from '../http-method-retry-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {



  dataSubject= new  Subject<any[]>();
  private data:any[];
    constructor(private httpClient: HttpClient) {
     }

  emitSubject(){
    this.dataSubject.next(this.data.slice());
  }
  myretryhandler = new HttpMethodRetryHandler();


  getDatasFromServer() {

      this.httpClient
        .get<any[]>('https://terre-rouge.firebaseio.com/Programme.json')
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.myretryhandler.handleError) // then handle the error
          )
        .subscribe(
          (response: any[]) => {

            this.data = response;
            this.emitSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }

}
