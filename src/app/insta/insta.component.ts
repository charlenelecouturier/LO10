import { Component, OnInit } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var token = '14328747028.11e9581.89ea81d4fc50446ca21d1d529e1735d8',
      num_photos = 10, // maximum 20
      container = document.getElementById( 'rudr_instafeed' ), // it is our <ul id="rudr_instafeed">
      scrElement = document.createElement( 'script' );

    window.mishaProcessResult = function( data ) {
      for( var x in data.data ){
        container.innerHTML += '<li style="margin-left:15px"><img src="' + data.data[x].images.low_resolution.url + '"></li>';
      }
    }

    scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
    document.body.appendChild( scrElement );

  }

}
