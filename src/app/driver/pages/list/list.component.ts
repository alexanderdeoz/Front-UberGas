import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { DriverModel } from '../../../models/driver.model'
import { MessageService } from '../../../services/mensage.service'
import { DriverHttpService } from '../../../services/driver-http.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  driver: DriverModel = {};
  drivers: DriverModel[] = [];
  formDriver: FormGroup;


  constructor(
    private driverHttpService: DriverHttpService,
    private formBuilder: FormBuilder,
    public menssageService: MessageService) {

    this.driver = {
      name: 'Steven',
      lastname: 'Chinchin',
      birthay: new Date(),
      phone: '0963707783',
      placa: 'PDF-123',
      vehicle: 'Camioneta',
      email: 'sad.chinchin@yavirac.edu.ec',
      password: '1234'
    };
    this.formDriver = this.newFormGroupDriver();

  }

  ngOnInit() {
    this.getDrivers();
  }
  newFormGroupDriver(): FormGroup {
    return this.formBuilder.group(
      {
        name: [null, [Validators.required, Validators.maxLength(100)]],
        lastname: [null, [Validators.required, Validators.maxLength(100)]],
        birthay: [null, [Validators.required, Validators.maxLength(20)]],
        phone: [null, [Validators.required, Validators.maxLength(10)]],
        placa: [null, [Validators.required, , Validators.maxLength(8)]],
        vehicle: [null, [Validators.required, Validators.maxLength(30)]],
        email: [null, [Validators.required, Validators.maxLength(100)]],
        passwor: [null, [Validators.required, Validators.maxLength(100)]],
      }
    )
  }

  getDrivers(): void {
    this.drivers.push(this.driver);
    this.driverHttpService.getDrivers().subscribe(
      response => {
        //respuesta satisfactoria
        console.log(response);

      }, error => {
        console.log(error)
      }

    );
  }

  selectDriver(driver: DriverModel) {
    console.log('Hola')
  }

  deleteDriver(driver: DriverModel): void {
    this.driverHttpService.deleteDriver(driver.placa).subscribe(
      response => {
        console.log(response);
        this.removeDriver(driver);
      }, error => {
        console.log(error);
      }
    );

  }

  removeDriver(driver: DriverModel) {
    this.drivers = this.drivers.filter(element => element.placa !== driver.placa);
  }

  updateDriver(driver: DriverModel): void {
    this.driverHttpService.updateDriver(driver.placa, driver).subscribe(
      response => {
        console.log(response);
        this.menssageService.success(response);
        this.formDriver.reset();
      },
      error => {
        console.log(error)
      }
    );

  }
  storeDriver(driver: DriverModel) {
    this.driverHttpService.storeDriver(driver).subscribe(
      response => {
        console.log(response)
        this.menssageService.success(response);
        this.formDriver.reset();
      },
      error => {
        console.log(error)
      }
    );
  }

  selectedDriver(driver: DriverModel) {

    console.log(driver);
    this.formDriver.patchValue(driver);
  }

  onSubmit() {
    console.log('onsumit')

    if (this.formDriver.valid) {
      if (this.formDriver.value) {
        this.updateDriver(this.formDriver.value);
      } else {
        this.storeDriver(this.formDriver.value);
      }

    } else {
      this.formDriver.markAllAsTouched();
    }
  }

  get placaField() {
    return this.formDriver.controls['placa'];
  }

  get nameField() {
    return this.formDriver.controls['name'];
  }
  get lastnameField() {
    return this.formDriver.controls['lastname'];
  }
  get birthayField() {
    return this.formDriver.controls['birthay'];
  }
  get phoneField() {
    return this.formDriver.controls['phone'];
  }
  get vehicleField() {
    return this.formDriver.controls['vehicle'];
  }
  get emailField() {
    return this.formDriver.controls['email'];
  }
  get passwordField() {
    return this.formDriver.controls['password'];
  }

}
