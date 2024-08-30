import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConexionService {
    private apiUrl = 'http://ip172-18-0-47-cr94cvqim2rg00fp9f00-5020.direct.labs.play-with-docker.com/characters'

    constructor(private http: HttpClient) { }

    obtenerDatos(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}