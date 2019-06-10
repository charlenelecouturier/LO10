import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import {MeteoService } from './services/meteo.service';
import {FirebaseService } from './services/firebase.service';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { HttpURLInterceptor } from './http-urlinterceptor';


import {InstaService } from './services/insta.service';

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
import { MapComponent } from './map/map.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InstaComponent } from './insta/insta.component';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'insta', component: InstaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TwitterComponent,
    TwitterOpenComponent,
    MeteoComponent,
    MapComponent,
    InstaComponent,
    FooterComponent,
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
   MatCheckboxModule,
   MatSidenavModule,
   RouterModule.forRoot(appRoutes)
 ],

 entryComponents: [
  TwitterComponent,
],
  providers: [
    TwitterService,
    MeteoService,
    InstaService,
    FirebaseService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpURLInterceptor,
     multi: true
   },
    {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpErrorInterceptor,
     multi: true
   },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
