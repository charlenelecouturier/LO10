import { Component, OnInit, OnDestroy } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import 'hammerjs';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
meteo={
weather:[{description:"", icon:""}],
main:{temp:""}
};
src="";

  constructor(private meteoService: MeteoService) { }


  ngOnInit() {
    this.onFetch();
    window.setInterval(() =>this.onFetch(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 60 requetes  pour 1 minutes d'après l'api  openweathermap)
    }

image(){

  return  this.src="http:\//openweathermap.org/img/w/"+this.meteo.weather[0].icon+".png";

}

onFetch() {
  this.meteoService.getMeteoFromServer()
  .subscribe(
  res =>this.meteo=res,
  err =>console.log(err)
  )

}

ngOnDestroy(){
window.clearInterval();

}

}
