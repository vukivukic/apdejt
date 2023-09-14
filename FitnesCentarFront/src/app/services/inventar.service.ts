import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarService {
  private _refresh = new Subject<void>();
  get refresh(){
    return this._refresh;
  }

  private inventarurl = "https://localhost:7049/api/FitnesOprema/getAllOprema";
  private inventarDodajurl = "https://localhost:7049/api/FitnesOprema/DodajOpremu";

  constructor(private _http: HttpClient) { }

  getOprema(){
    return this._http.get<any>(this.inventarurl);
  }

  dodajOpremu(data: any){
    return this._http.post<any>(this.inventarDodajurl, data).pipe( tap(() => this._refresh.next()));
  }

  izbrisiOpremu(id: number): Observable<any>{
    return this._http.delete(`https://localhost:7049/api/FitnesOprema/DeleteOprema/${id}`).pipe( tap(() => this._refresh.next()));
  }
  updateOprema(id: number, data: any): Observable<any>{
    return this._http.put<any>(`https://localhost:7049/api/FitnesOprema/editOpremaById/${id}`, data).pipe( tap(() => this._refresh.next()));
   }
}
