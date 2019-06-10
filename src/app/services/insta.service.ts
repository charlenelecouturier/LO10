import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InstaService {



  private data:any[];

    constructor(private httpClient: HttpClient) {
     }



  getFromServer() {

      return this.httpClient
        .get<instagramInterface>('https://api.instagram.com/v1/users/self/media/recent/?access_token=14328747028.11e9581.89ea81d4fc50446ca21d1d529e1735d8')

}
}
interface instagramInterface {
  "data":[]
}
