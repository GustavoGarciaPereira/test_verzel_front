import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_ID = 'user_id';

  constructor() { }

  saveToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null; // Retorna true se existe um token, false caso contrário
  }

  clearToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }


  saveUserId(UserId: string): void {
    sessionStorage.setItem(this.USER_ID, UserId);
  }

  getUserId(): string | null {
    return sessionStorage.getItem(this.USER_ID);
  }


  clearUserId(): void {
    sessionStorage.removeItem(this.USER_ID);
  }
}
