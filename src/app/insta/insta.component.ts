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
  data:any;


  constructor(private instaService: InstaService) { }

  ngOnInit() {
    this.onFetch();
    window.setInterval(() =>this.onFetch(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 60 requetes  pour 1 minutes d'après l'api  openweathermap)

}

ngOnDestroy(){
window.clearInterval();

}
  onFetch() {
    //window.setInterval(() =>this.instaService.getFromServer(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 180 requetes search/tweets pour 15 minutes d'après l'api twitter)
    this.instaService.getFromServer()
    .subscribe(
    res =>this.data=res.data,
    err =>console.log(err)
    )

}
}
