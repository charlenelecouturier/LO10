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
icon;
  aqi: number;

  constructor(private airService: AirService ) { }

  ngOnInit() {
    this.onFetch();
    window.setInterval(() =>this.onFetch(), 300000);
  }

  quality(){
    if (this.aqi<=50){
      this.icon="/assets/in-love.svg"
      return "Bien"
    }
    else if(this.aqi>=50 && this.aqi<=100){
      this.icon="happy.svg"

      return "Modéré"
    }
    else if(this.aqi>=101 && this.aqi<=150){
      this.icon="/assets/confused.svg"

      return "Mauvais (personnes sensibles)"
    }    else if(this.aqi>=151 && this.aqi<=200){
      this.icon="/assets/sad.svg"

          return "Mauvais"
        }else {
          this.icon="/assets/angry.svg"

          return "Très mauvais"
        }
  }

  onFetch() {
    this.airService.getAirFromServer().subscribe(res => {
      this.data = res.data;
      this.aqi = this.data.current.pollution.aqius;
    })

  }

  ngOnDestroy(){
  window.clearInterval();

  }


}
