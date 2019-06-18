import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})



export class FacebookComponent implements OnInit {

  logFB() {
    FB.api('/me', function(response) {
      if(response) {
        FB.logout(function(response) {
          document.getElementById("loginLogout").innerHTML = "Se connecter";
          document.getElementById("authTitle").innerHTML = "Je me connecte :";
          document.getElementById("authTxt").innerHTML = "Avec mon compte Facebook";
          document.getElementById("authButton").innerHTML = "Continue with Facebook";
          document.getElementById("authContainer").classList.remove("isConnected");
        });
      }else   {
        FB.login(function(response) {
            if (response.authResponse) {
             FB.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
               document.getElementById("loginLogout").innerHTML = "Salut " + response.name;
               document.getElementById("authTitle").innerHTML = response.name;
               document.getElementById("authTxt").innerHTML = "Se déconnecter";
               document.getElementById("authButton").innerHTML = "Logout";
               document.getElementById("authContainer").classList.add("isConnected");
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
             document.getElementById("loginLogout").innerHTML = "Se connecter";
             document.getElementById("authTitle").innerHTML = "Je me connecte :";
             document.getElementById("authTxt").innerHTML = "Avec mon compte Facebook";
             document.getElementById("authButton").innerHTML = "Continue with Facebook";
             document.getElementById("authContainer").classList.remove("isConnected");
            }
        });
      }
    });
  }

  constructor() {}

  ngOnInit() {

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '2062220704086998',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      });
      FB.AppEvents.logPageView();
      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response){
      var isConnected = null;

      if (response.status == "connected") {
        isConnected = true;
        FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name);
           document.getElementById("loginLogout").innerHTML = "Salut " + response.name;
        });
        document.getElementById("authContainer").classList.add("isConnected");
      }else {
        isConnected = false;
        document.getElementById("loginLogout").innerHTML = "Se connecter";
        document.getElementById("authContainer").classList.remove("isConnected");
      }
    };
  }
}
