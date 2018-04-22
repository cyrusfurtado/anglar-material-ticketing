import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http: HttpClient, private localstorage: AsyncLocalStorage) { }

  private defaultheaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  request(url, method = 'get', headers = this.defaultheaders, body = null): Promise<any>{

    if(method === 'get'){
      return this.http.get(url)
        .toPromise()
        .then(response => response)
        .catch(err => err);

    }
    else{
      return this.http.post(url, body, {headers: headers})
              .toPromise()
              .then(response => response)
              .catch(err => err);

    }

  }

  setItem(key: string,item){
    return new Promise((res, rej) => {
      this.localstorage.setItem(key,item)
                      .subscribe(
                        (result) => {console.log("key ", key, " saved ", result); res(result)},
                        (err) => {console.log("key ", key, " save error ", err); rej(err);}
                      )
    });
    
  }

  getItem(key: string){
    return new Promise((res, rej) => {
      this.localstorage.getItem(key)
                    .subscribe((result) => {
                      res(result);
                    },(err) => {
                      rej(err);
                    });
    });
  }

  clearItem(key: string){
    return new Promise((res, rej) => {
      this.localstorage.removeItem(key)
                      .subscribe((data) => res(data),(err) => rej(err))
    })
  }

}
