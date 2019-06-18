import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'Plage des finaux';
dataSubscription: Subscription;
  data:any[];

constructor(private firebaseService: FirebaseService) {
  }



  ngOnInit() {
    this.dataSubscription = this.firebaseService.dataSubject.subscribe(
     (data: any[]) => {
        this.data = data;
      }
    );
    this.onFetch();
  }

  ngOnDestroy(){
  this.dataSubscription.unsubscribe();
  }
    onFetch() {
      this.firebaseService.getDatasFromServer();
  }
}
