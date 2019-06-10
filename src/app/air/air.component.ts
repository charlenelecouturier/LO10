import { Component, OnInit, OnDestroy } from '@angular/core';
import { MeteoService } from '../services/air.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
data:any;

  constructor(private airService: AirService ) { }

  ngOnInit() {
    this.onFetch();
    window.setInterval(() =>this.onFetch(), 300000);
  }

  onFetch() {
    this.airService.getAirFromServer()
    .subscribe(
    res =>this.data=res.data,
    err =>console.log(err)
    )

  }

  ngOnDestroy(){
  window.clearInterval();

  }


}
