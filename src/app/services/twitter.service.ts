import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';



@Injectable({
  providedIn: 'root'
})
export class TwitterService {
tweetSubject= new  Subject<any[]>();
private tweets:any;
  constructor(private httpClient: HttpClient) { }

emitTweetsSubject(){
  this.tweetSubject.next(this.tweets.slice());
}
getTweetsFromServer() {
    this.httpClient
      .get<any[]>('https://testlo10.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.tweets = response;
          this.emitTweetsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


  }
