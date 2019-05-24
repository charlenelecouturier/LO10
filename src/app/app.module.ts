import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import {MeteoService } from './services/meteo.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { TwitterComponent, TwitterOpenComponent } from './twitter/twitter.component';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TwitterComponent,
    TwitterOpenComponent,
    MeteoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
   TooltipModule.forRoot(),
   ModalModule.forRoot(),
   MatButtonModule,
   MatToolbarModule,
   MatDialogModule,
   MatCheckboxModule
 ],

 entryComponents: [
  TwitterComponent,
],
  providers: [
    TwitterService,
    MeteoService

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
