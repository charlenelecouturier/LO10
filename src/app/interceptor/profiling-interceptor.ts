

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
import { tap, map ,finalize} from 'rxjs/operators';


export class  ProfilingInterceptor implements HttpInterceptor {


 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   const started = Date.now();
   let ok: string;

   return next.handle(req).pipe(
     tap(
       (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
       (error: HttpErrorResponse) => ok = "failed"
     ),
     // Log when response observable either completes or errors
     finalize(() => {
       const elapsed = Date.now() - started;
       const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms. date : ${new Date()}`;
       console.log(msg);
     })
   );
 }

}
