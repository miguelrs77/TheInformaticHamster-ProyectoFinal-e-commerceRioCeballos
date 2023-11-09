import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoCard } from '../interfaces/infoCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoCardService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'infocard/';
   }

   getInfoCard(id: number): Observable<InfoCard> {
    return this.http.get<InfoCard>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }
   
   getListInfoCards(): Observable<InfoCard[]> {
    return this.http.get<InfoCard[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   saveInfoCard(infoCard: InfoCard): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, infoCard);
   }

   updateInfoCard(id: number, infoCard: InfoCard): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, infoCard);
   }

   deleteInfoCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }
}
