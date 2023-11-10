import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../interfaces/pregunta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/pregunta/';
   }

   getPregunta(id: number): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }

   getListPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   updatePregunta(id: number, pregunta: Pregunta): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, pregunta);
   }

   savePregunta(pregunta: Pregunta): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, pregunta);
   }

   deletePregunta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }

}
