import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClanService {

  private clanovi: any[] = [
    {id: 1, ime: 'mockIme', prezime: 'mockPrezime', email: 'mockEmail', adresa: 'mockAdresa', radiobtn: 'instruktor',brTelefona: 'mockBrTelefona' },
    {id: 2, ime: 'mockIme2', prezime: 'mockPrezime2', email: 'mockEmail2', adresa: 'mockAdresa2',radiobtn: 'instruktor',brTelefona: 'mockBrTelefona2' },
  ]
  private oprema: any[] = [
    {id:1, naziv: 'Teg', kolicina: '20'},
    {id:2, naziv: 'guma', kolicina: '20'}
  ]

  private configurl="https://localhost:7049/api/Clanovi/getAllClanovi";//localhost:7049/api/Clanovi;
  private clanurl = "https://localhost:7049/api/Clanovi/CreateClan";

  constructor(private _http: HttpClient) {}

  private _refresh = new Subject<void>();
  get refresh(){
    return this._refresh;
  }

  getClanovi(){
    return this._http.get<any>(this.configurl);
  }


  dodajClana(data: any): Observable<any>{
   return this._http.post<any>(this.clanurl, data).pipe( tap(() => this._refresh.next()))
  }

  updateClan(id: number, data: any): Observable<any>{
   return this._http.put<any>(`https://localhost:7049/api/Clanovi/editById/${id}`, data).pipe( tap(() => this._refresh.next()));
  }

  izbrisiClana(id: number): Observable<any>{
    return this._http.delete(`https://localhost:7049/api/Clanovi/DeleteClan/${id}`).pipe( tap(() => this._refresh.next()));
  }


}




