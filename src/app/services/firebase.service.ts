import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
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


  getDatasFromServer() {

      this.httpClient
        .get<any[]>('https://testlo10.firebaseio.com/appareils.json')
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
