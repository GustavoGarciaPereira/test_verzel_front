import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../cadastro-car/car.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceCadastroCarService {
  private apiUrl = 'https://asdf-h6q0.onrender.com/cars/';
  constructor(private http: HttpClient) {}

  createCar(carData: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, carData);
  }
}