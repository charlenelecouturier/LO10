import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from '../services/twitter.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import 'hammerjs';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit, OnDestroy {
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
this.onFetch();
}

ngOnDestroy(){
this.TWEETSubscription.unsubscribe();
window.clearInterval();

}
  onFetch() {
    this.twitterService.getTweetsFromServer();
    window.setInterval(() =>this.twitterService.getTweetsFromServer(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 180 requetes search/tweets pour 15 minutes d'après l'api twitter)


}
}



@Component({
  selector: 'twitter-open',
  templateUrl: './twitter-open.html',
})
export class TwitterOpenComponent {


  constructor(public dialog: MatDialog) {
    }

twitter;
  openDialog() {
    const dialogRef = this.dialog.open(TwitterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
