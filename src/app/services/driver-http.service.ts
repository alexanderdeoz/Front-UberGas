import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';
@Injectable({
  providedIn: 'root'
})
export class DriverHttpService {

  constructor(private httpClient: HttpClient) {

  }
  getAll() {
    return this.httpClient.get('http://backend-ubergas.test/api/v1/drivers');
  }
  delete(placa: string | undefined) {
    return this.httpClient.delete('http://backend-ubergas.test/api/v1/drivers');
  }
  update(placa: string | undefined, driver: DriverModel) {
    const url = 'http://backend-ubergas.test/api/v1/drivers';
    return this.httpClient.post(url, driver);
  }
}
