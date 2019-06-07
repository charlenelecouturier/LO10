import { Component, OnInit, OnDestroy } from '@angular/core';
import { InstaService } from '../services/insta.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare let window: any;

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent implements OnInit {
subscription: Subscription;
  data:any;
instaIMG  = "";
 imgLink   = "";
 userLikes = "";

  constructor(private instaService: InstaService) { }

  ngOnInit() {
  this.subscription = this.instaService.subject.subscribe(
   (data) => {
      this.data = data;
     }

  );
this.onFetch();
}

ngOnDestroy(){
this.subscription.unsubscribe();
window.clearInterval();

}
  onFetch() {
    this.instaService.getFromServer();
    window.setInterval(() =>this.instaService.getFromServer(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 180 requetes search/tweets pour 15 minutes d'après l'api twitter)


}
}
