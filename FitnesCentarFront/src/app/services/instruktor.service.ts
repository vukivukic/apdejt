import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstruktorService {

  private configurl="https://localhost:7049/api/Instruktor/getAllInstruktori";//localhost:7049/api/Clanovi;
  private instruktorurl = "https://localhost:7049/api/Instruktor/createInstruktor";
 
   constructor(private _http: HttpClient) {}
 
   private _refresh = new Subject<void>();
   get refresh(){
     return this._refresh;
   }
 
   getInstruktori(){
     return this._http.get<any>(this.configurl);
   }
 
 
   dodajInstruktora(data: any): Observable<any>{
    return this._http.post<any>(this.instruktorurl, data).pipe( tap(() => this._refresh.next()))
   }
 
   updateInstroktora(id: number, data: any): Observable<any>{
    return this._http.put<any>(`https://localhost:7049/api/Instruktor/updateInstruktor/${id}`, data).pipe( tap(() => this._refresh.next()));
   }
 
   izbrisiInstruktora(id: number): Observable<any>{
     return this._http.delete(`https://localhost:7049/api/Instruktor/deleteInstruktor/${id}`).pipe( tap(() => this._refresh.next()));
   }
}
