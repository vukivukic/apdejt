import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreningService {

  private configurl="https://localhost:7049/api/TipTreninga/getAllTipTreninga";//localhost:7049/api/Clanovi;
  private treningurl = "https://localhost:7049/api/TipTreninga/createTipTreninga";
 
   constructor(private _http: HttpClient) {}
 
   private _refresh = new Subject<void>();
   get refresh(){
     return this._refresh;
   }
 
   getTrening(){
     return this._http.get<any>(this.configurl);
   }
 
 
   dodajTrening(data: any): Observable<any>{
    return this._http.post<any>(this.treningurl, data).pipe( tap(() => this._refresh.next()))
   }
 
   updateTrening(id: number, data: any): Observable<any>{
    return this._http.put<any>(`https://localhost:7049/api/Trening/${id}`, data).pipe( tap(() => this._refresh.next()));
   }
 
   izbrisiTrening(id: number): Observable<any>{
     return this._http.delete(`https://localhost:7049/api/Trening/${id}`).pipe( tap(() => this._refresh.next()));
   }
}
