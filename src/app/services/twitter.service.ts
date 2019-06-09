import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {HttpMethodRetryHandler} from '../http-method-retry-handler';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TwitterService {
tweetSubject= new  Subject<any[]>();
private tweets:any[];
  constructor(private httpClient: HttpClient) {
   }

emitTweetsSubject(){
  this.tweetSubject.next(this.tweets.slice());
}
myretryhandler = new HttpMethodRetryHandler();


getTweetsFromServer() {

    this.httpClient
      .get<any[]>('http://localhost:3000/home_timeline')
      .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.myretryhandler.handleError) // then handle the error
        )
      .subscribe(
        (response: any[]) => {

          this.tweets = response;
          this.emitTweetsSubject();
        },

      );
}


  }
