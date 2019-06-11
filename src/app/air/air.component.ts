import { Component, OnInit, OnDestroy } from '@angular/core';
import { AirService } from '../services/air.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
  data: {
    city: string,
    country: string,
    current: any,
    location: any,
    state: string
  } | null = null;

  aqi: number;

  constructor(private airService: AirService ) { }

  ngOnInit() {
    this.onFetch();
    window.setInterval(() =>this.onFetch(), 300000);
  }

  onFetch() {
    this.airService.getAirFromServer().subscribe(res => {
      console.log(res);
      this.data = res.data;
      this.aqi = this.data.current.pollution.aqius;
    })

  }

  ngOnDestroy(){
  window.clearInterval();

  }


}
