import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Plage des finaux';
  TWEETSubscription: Subscription;
  tweets:any[];
 test=[];

constructor(private twitterService: TwitterService) {
  }

  getTweet(){
    this.test.push('Mango');
    return this.tweets.length;
  }

  getUrl(tweet)
  {
    return "http://twitter.com/"+tweet.user.id_str+"/status/" +tweet.id_str;
  }
  ngOnInit() {
  this.TWEETSubscription = this.twitterService.tweetSubject.subscribe(
   (tweets: any[]) => {
      this.tweets = tweets;
    }
  );
  this.twitterService.emitTweetsSubject();
}

ngOnDestroy(){
this.TWEETSubscription.unsubscribe();

}
  onFetch() {
    this.twitterService.getTweetsFromServer();
}
}
