import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class InstaService {



  subject= new  Subject<any[]>();
  private data:any[];

    constructor(private httpClient: HttpClient) {
     }

  emitSubject(){
    this.subject.next(this.data.slice());
  }


  getFromServer() {

      this.httpClient
        .get<instagramInterface>('https://api.instagram.com/v1/users/self/media/recent/?access_token=14328747028.11e9581.89ea81d4fc50446ca21d1d529e1735d8')
        .subscribe(
          (response) => {

            this.data = response.data;
            this.emitSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }
}

interface instagramInterface {
  "data":[]
}
