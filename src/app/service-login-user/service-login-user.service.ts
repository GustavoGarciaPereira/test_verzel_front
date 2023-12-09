import { Injectable } from '@angular/core';
import { UserLogin } from './user-login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loginUser(userData: UserLogin): Observable<any> {
    console.log(userData);
    const body = new URLSearchParams();
    body.set('username', userData.username);
    body.set('password', userData.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/token/`, body.toString(), { headers });
  }

}
