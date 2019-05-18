import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';



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


getTweetsFromServer() {

    this.httpClient
      .get<any[]>('http://localhost:3000/home_timeline')
      .subscribe(
        (response: any[]) => {

          this.tweets = response;
          this.emitTweetsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


  }
