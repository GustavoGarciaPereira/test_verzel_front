import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreate } from './user-create'; // Ajuste o caminho conforme necessário
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceCreateUserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createUser(userData: UserCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/`, userData);
  }
}
