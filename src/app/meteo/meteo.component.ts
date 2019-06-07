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
weather:[{description:""}],
main:{temp:""}
};
src="";

  constructor(private meteoService: MeteoService) { }


  ngOnInit() {
this.onFetch();
window.setInterval(() =>this.onFetch(), 300000);// on actualise le fil toutes les 5 minutes (rate limite = 60 requetes  pour 1 minutes d'après l'api  openweathermap)
}

image(){
var  description= this.meteo.weather[0].description;
  switch (description) {
  case 'clear sky':
  return  this.src="http:\//openweathermap.org/img/w/01d.png";
    break;
  case 'few clouds':
    return this.src="http:\//openweathermap.org/img/w/02d.png";
    break;
    case 'scattered clouds':
      return this.src="http:\//openweathermap.org/img/w/03d.png";
      break;
      case 'overcast clouds':
        return this.src="http:\//openweathermap.org/img/w/03d.png";
        break;
        case 'shower rain':
        return  this.src="http:\//openweathermap.org/img/w/09d.png";
          break;

          case 'rain':
        return    this.src="http:\//openweathermap.org/img/w/10d.png";
            break;
            case 'light rain':
              return    this.src="http:\//openweathermap.org/img/w/10d.png";
            break;
            case 'moderate rain':
              return    this.src="http:\//openweathermap.org/img/w/10d.png";
            break;
            case 'thunderstorm':
          return    this.src="http:\//openweathermap.org/img/w/11d.png";
              break;
              case 'snow':
            return    this.src="http:\//openweathermap.org/img/w/13d.png";
                break;
                case 'mist':
              return    this.src="http:\//openweathermap.org/img/w/50d.png";
                  break;
                  case "broken clouds":
                  return  this.src="http:\//openweathermap.org/img/w/04d.png";
                    break;
}
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
