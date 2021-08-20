import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

import {DriverModel} from '../models/model.index'

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
  
    constructor() {
    }
    success(DriverModel: DriverModel|  undefined) {
        return Swal.fire({
         title:DriverModel?.placa
        });
      }
    
  }