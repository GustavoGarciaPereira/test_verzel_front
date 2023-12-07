import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreate } from './user-create'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class ServiceCreateUserService {

  private apiUrl = 'http://127.0.0.1:8000/users/';

  constructor(private http: HttpClient) { }

  createUser(userData: UserCreate): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
