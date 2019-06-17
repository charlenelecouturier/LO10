

import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
 HttpResponse,
 HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class  HttpURLInterceptor implements HttpInterceptor {


 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 var httpsReq = request.clone();
 //si on n'est pas en local on change le protocole http par https
   if(!request.url.includes("localhost")) {
     // clone request and replace 'http://' with 'https://' at the same time
  httpsReq = request.clone({
     url: request.url.replace("http://", "https://")
   });
}
   return next.handle(httpsReq);
 }

}
