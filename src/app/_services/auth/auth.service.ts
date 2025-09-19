import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Token } from '../../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  readonly authUrl = 'http://127.0.0.1:8000/user';

  constructor() { }

  login(credentials: { email: string; password: string }): Observable<Token> {
    return this.http.post<Token>(`${this.authUrl}`, credentials).pipe(
      tap((response: Token )=> localStorage.setItem('token', JSON.stringify( response)))
    );
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  isAdmin(role:string | null): boolean | null {
    if(role == "admin"){
      return true
    }
    return false
  }
}
