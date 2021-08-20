import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';
import { environment } from '../../environments/environment';
import { Handler } from '../exception/handler';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class DriverHttpService {
  API_URL: string = environment.API_URL;
  constructor(private httpClient: HttpClient) {

  }

  getDrivers(): Observable<DriverModel> {
    const url = this.API_URL + '/driver';
    return this.httpClient.get<DriverModel>(url).pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }


  getDriver(placa :string) :Observable<DriverModel> {
    const url = this.API_URL + `/drivers/${placa}`;
    return this.httpClient.get<DriverModel>(url).pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }


  updateDriver(placa:string | undefined,driver:DriverModel):Observable<DriverModel> {
    const url = this.API_URL + `/drivers/${placa}`;
    return this.httpClient.put<DriverModel>(url,driver).pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  deleteDriver(placa:string | undefined):Observable<DriverModel> {
    const url = this.API_URL + `/drivers/${placa}`;
    return this.httpClient.delete<DriverModel>(url).pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  deleteDrives(placas:(string |undefined)[]):Observable<DriverModel> {
    const url = this.API_URL + `/driver/destroys`;
    return this.httpClient.patch<DriverModel>(url,{placas}).pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }



 

 
}
