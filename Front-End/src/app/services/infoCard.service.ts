import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoCard } from '../interfaces/infoCard';
import { Observable } from 'rxjs';

const MultipartHeaders: HttpHeaders = new HttpHeaders({
  Accept: 'application/json'
});


@Injectable({
  providedIn: 'root'
})

export class InfoCardService {
  private myAppUrl: string;
  private myApiUrl: string;
  private myAppUpload: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/infocard/';
    this.myAppUpload = '/upload';
   }

   saveInfoCard(infoCard: InfoCard): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, infoCard);
   }

   uploadImgInfoCard(fd: FormData): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myAppUpload}`, fd,{headers: MultipartHeaders})
   }

   getInfoCard(id: number): Observable<InfoCard> {
    return this.http.get<InfoCard>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }
   
   getListInfoCards(): Observable<InfoCard[]> {
    return this.http.get<InfoCard[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   updateInfoCard(id: number, infoCard: InfoCard): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, infoCard);
   }

   deleteInfoCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
   }

}
