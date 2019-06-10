import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, throwError } from 'rxjs';
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
    if(this.data!=null){
    this.dataSubject.next(this.data.slice());
  }
  }


  getDatasFromServer() {

      this.httpClient
        .get<any[]>('https://terre-rouge.firebaseio.com/Programme.json')
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
