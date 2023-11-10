import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint; // = http://localhost:3308
  }
  // CREAR USUARIO
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}/signup`, user);
  }
  // LOGIN USUARIO
  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}/login`, user);
  }
  // NOSE USUARIO
  getUser(): Observable<string> {
    return this.http.get<string>(`${this.myAppUrl}/dashboard`);
  }
  // VALIDACION DE LOGED
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    // Devuelve true si token existe y no está vacío = usuario ha iniciado sesión.
    return token !== null && token.trim() !== ''; 
  }
  // LOGOUT USER
  logout(): void {
    localStorage.removeItem('token');
  }
}
