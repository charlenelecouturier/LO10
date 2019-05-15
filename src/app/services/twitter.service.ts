import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';



@Injectable({
  providedIn: 'root'
})
export class TwitterService {
tweetSubject= new  Subject<any[]>();
private tweets:any;
  constructor(private httpClient: HttpClient) {
   }

emitTweetsSubject(){
  this.tweetSubject.next(this.tweets.slice());
}


/*httpOptions = {
  headers: new HttpHeaders({
    Authorization: "OAuth oauth_consumer_key='yBj9dvWUP7Ea0Ny9zIetVhpVm',oauth_token='1425546774-9zB4wh0l2206mp4kqJz0FwxYqo8BmoD1HPGQjrK',oauth_signature_method='HMAC-SHA1',oauth_timestamp='1557902942',oauth_nonce='QBvkBRSCoNS',oauth_version='1.0',oauth_signature='FyoCbkc7vGEJ9intQSk1SNVLeWU%3D'",
    Accept: "application/json",
    Cache-Control: "no-cache",
    Postman-Token: "4c6c6cc4-bcab-48d9-afad-62befb5349fd,8cab646f-0265-4391-ae0e-8013717e07b0"
    cookie:"personalization_id='v1_SsVnIckwq+LHW4vqmaQsnQ=='; guest_id=v1%3A155790250159115657; lang=fr"
    accept-encoding: "gzip, deflate"
    Connection: "keep-alive"
    cache-control: "no-cache"
  })
};*/



getTweetsFromServer() {
let headers: HttpHeaders = new HttpHeaders();

let oauth_nonce: String = new String();
let oauth_signature : String = new String();
let oauth_timestamp = new Date().getTime()

//headers = headers.append('Host', 'api.twitter.com');
headers = headers.append('Authorization','OAuth oauth_consumer_key=\"yBj9dvWUP7Ea0Ny9zIetVhpVm\",oauth_token=\"1425546774-9zB4wh0l2206mp4kqJz0FwxYqo8BmoD1HPGQjrK\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=' + '\"'+ oauth_timestamp+ '\",oauth_nonce=\"oWdrQdJVoOK\",oauth_version=\"1.0\",oauth_signature=\"9p%2Bt6rPHNSMjA%2FI5okGk8kROQ8g%3D\"');
//headers = headers.append('User-Agent', 'PostmanRuntime/7.13.0');
//headers = headers.append('Accept', '*/*');
//headers = headers.append('Cache-Control', 'no-cache');
//headers = headers.append('Postman-Token', 'a8398357-a4d0-4a83-8161-9574afa53c70,bc8d2606-7e99-485f-a2ab-00db81495a30');
//headers = headers.append('Host', 'api.twitter.com');
//headers = headers.append('cookie', "personalization_id='v1_SsVnIckwq+LHW4vqmaQsnQ=='; guest_id=v1%3A155790250159115657; lang=fr");
//headers = headers.append('accept-encoding', 'gzip, deflate');
//headers = headers.append('Connection', 'keep-alive');
//headers = headers.append('cache-control', ' no-cache');


    this.httpClient
      .get<any[]>('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular', {headers})
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
