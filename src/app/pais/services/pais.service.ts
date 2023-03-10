import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const URL = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(URL);
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const URL = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(URL);
  }

  buscarRegion(termino: string): Observable<Country[]> {

    const URL = `${this.apiUrl}/region/${termino}`
    return this.http.get<Country[]>(URL);
  }

  getPaisAlphaCode(id: string): Observable<Country> {

    const URL = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(URL);
  }

}
