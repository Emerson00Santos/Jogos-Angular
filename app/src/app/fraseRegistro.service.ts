import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { frase } from './frase';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class fraseService{

    readonly url = 'http://localhost:3000/frase';

    constructor(private http: HttpClient){}

    get(): Observable<frase[]>{
        return this.http.get<frase[]>(this.url);
    }

    add(r : frase): Observable<frase> {
        return this.http.post<frase>(this.url, r);
    }

    delete(id: frase): Observable<frase[]> {
        return this.http.delete<frase[]>(`${this.url}/${id}`);
    }
    
}