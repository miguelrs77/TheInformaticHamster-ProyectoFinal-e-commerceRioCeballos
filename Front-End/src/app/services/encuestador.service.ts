import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encuestador } from '../interfaces/encuestador';

@Injectable({
    providedIn: 'root'
})
export class EncuestadorService {
    private myAppUrl: string;
    private myApiUrl: string;


    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '/encuestador';
    }

    signIn(encuestador: Encuestador): Observable<any> {
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, encuestador);
    }

    login(encuestador: Encuestador): Observable<string> {
        return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, encuestador);
    }

}
