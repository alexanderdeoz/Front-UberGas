import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor(private httpClient :HttpClient) { 

  }
  getAll(){
    return this.httpClient.get('http://backend-ubergas.test/api/v1/users');
  }
}
