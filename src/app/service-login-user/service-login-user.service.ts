import { Injectable } from '@angular/core';
import { UserLogin } from './user-login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://asdf-h6q0.onrender.com/token/';

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

    return this.http.post(this.apiUrl, body.toString(), { headers });
  }

}
