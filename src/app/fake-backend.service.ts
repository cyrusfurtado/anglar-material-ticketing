import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app-service.service';
import { dummydata } from './dummy-data';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
 
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
 
    constructor(private app: AppService) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("http event...")
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
 
        // wrap in delayed observable to simulate server api call
        if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
            return new Observable((observer) => {
                if(request.body){

                    this.app.getItem(`reg_user_${request.body.user}`)
                        .then((result: any) => {
                            if(request.body.password === result.password){
                                // return Observable.of(new HttpResponse({ status: 200, body: request.body }));
                                observer.next(new HttpResponse({ status: 200, body:{status: "success", data: result} }));
                                observer.complete();
                            }
                            else{
                                // return Observable.of(new HttpResponse({ status: 500, body: "server error" }));
                                observer.error(new HttpResponse({ status: 500, body: "server error" }))
                            }
                        })
                        .catch((err) => {
                            observer.error(new HttpResponse({ status: 401, body: "incorrect username / password" }));
                        })
                }
            })
            // .mergeMap(() => {
            //     return Observable.of(new HttpResponse({ status: 200, body: request.body }))
            // });
        }
        else if (request.url.endsWith('/api/register') && request.method === 'POST') {
            return new Observable((observer) => {

                if(request.body){
                    // {username: user, password: password, firstname: firstname, lastname: lastname}
                    if(request.body.username){
                        this.app.setItem(`reg_user_${request.body.username}`,request.body)
                            .then((data) => {
                                observer.next(new HttpResponse({ status: 200, body:{status: "success", data: request.body} }));
                                observer.complete();
                            })
                            .catch(err => observer.error(new HttpResponse({ status: 401, body: err })))                        
                    }
                    else{
                        observer.error(new HttpResponse({ status: 401, body: "incorrect register / password" }));
                    }
                }
                 else {
                    // else return 400 bad request
                    return observer.error(new HttpResponse({ status: 400, body: "bad request" }));
                }

            })
            // .mergeMap((data) => {
            //     // console.log("merged obers",data)
            //     // return Observable.of(new HttpResponse({ status: 200, body: request.body }))
            // });
        }
        else if(request.url.endsWith('/api/flights') && request.method === 'GET'){
            return new Observable((observer) => {
                // if(request.body.username){
                    observer.next(new HttpResponse({ status: 200, body:{status: "success", data: dummydata.flights} }))
                    observer.complete();
                // }
     
            });
        }else if(request.url.endsWith('/api/trains') && request.method === 'GET'){
            return new Observable((observer) => {
                // if(request.body.username){
                    observer.next(new HttpResponse({ status: 200, body:{status: "success", data: dummydata.trains} }))
                    observer.complete();
                // }
     
            });
        }else if(request.url.endsWith('/api/buses') && request.method === 'GET'){
            return new Observable((observer) => {
                // if(request.body.username){
                    observer.next(new HttpResponse({ status: 200, body:{status: "success", data: dummydata.buses} }))
                    observer.complete();
                // }
     
            });
        }

        return next.handle(request);

     

    }
}
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
