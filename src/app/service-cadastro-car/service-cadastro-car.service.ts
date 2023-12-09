import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../cadastro-car/car.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceCadastroCarService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createCar(carData: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}/cars/`, carData);
  }
}
