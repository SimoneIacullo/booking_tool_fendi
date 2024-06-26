import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DialogData, ModelloEvento, TipoEvento } from './model/master-data';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  base_url: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }


  getEventiVendite(): Observable<DialogData[]> {
    return this.http.get<DialogData[]>(this.base_url + "/vendite");
  }

  getEventiTraining(): Observable<DialogData[]> {
    return this.http.get<DialogData[]>(this.base_url + "/training");
  }

  getEventiHealth(): Observable<DialogData[]> {
    return this.http.get<DialogData[]>(this.base_url + "/health");
  }


  putPrenotazioneVendite(id: number): Observable<null> {
    return this.http.put<null>(this.base_url + "/salvaVendite/" + id, {});
  }

  putCancellazioneVendite(id: number): Observable<null> {
    return this.http.put<null>(this.base_url + "/cancellaVendite/" + id, {});
  }
  
  putPrenotazioneTraining(id: number): Observable<null> {
    return this.http.put<null>(this.base_url + "/salvaTraining/" + id, {});
  }

  putCancellazioneTraining(id: number): Observable<null> {
    return this.http.put<null>(this.base_url + "/cancellaTraining/" + id, {});
  }

  putPrenotazioneHealth(id: number, n: number): Observable<number> {
    return this.http.put<number>(this.base_url + "/salvaHealth/" + id, n);
  }

  putCancellazioneHealth(id: number, n: number): Observable<number> {
    return this.http.put<number>(this.base_url + "/cancellaHealth/" + id, n);
  }
  


  getTipoEvento(): Observable<TipoEvento[]> {
    return this.http.get<TipoEvento[]>(this.base_url + "/tipoEvento");
  }

  getEventi(tipo: string | null): Observable<ModelloEvento[]> {
    return this.http.get<ModelloEvento[]>(this.base_url + "/evento/" + tipo);
  }

}

export const EventoResolver: ResolveFn<ModelloEvento[]> = (route) => {
  const tipo = route.paramMap.get('tipo');
  return inject(HttpRequestService).getEventi(tipo);
}