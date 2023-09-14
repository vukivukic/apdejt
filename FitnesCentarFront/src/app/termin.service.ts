import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DodajTerminService {

 // private configurl="https://localhost:7049/api/Termin/GetAllTermin";//localhost:7049/api/Clanovi;
  private treningurl = "https://localhost:7049/api/Termin/zakaziTrening";
  tipoviTreninga:any = []
 
   constructor(private _http: HttpClient) {}
 
   private _refresh = new Subject<void>();
   get refresh(){
     return this._refresh;
   }
 
  //  getTermin(){
  //    return this._http.get<any>(this.configurl);
  //  }
 
 
   dodajTermin(data: any): Observable<any>{
    return this._http.post(this.treningurl, data).pipe( tap(() => this._refresh.next()))
   }
 
   updateTrening(id: number, data: any): Observable<any>{
    return this._http.put<any>(`https://localhost:7049/api/Trening/${id}`, data).pipe( tap(() => this._refresh.next()));
   }
 
   izbrisiTrening(id: number): Observable<any>{
     return this._http.delete(`https://localhost:7049/api/Trening/${id}`).pipe( tap(() => this._refresh.next()));
   }


   tipTreninga(){
    return this._http.get('https://localhost:7049/api/TipTreninga/getAllTipTreninga')
   }

   instruktor(){
    return this._http.get(`https://localhost:7049/api/TipTreninga/nadjiInstruktoraPoTipuT?IdTipT=9F113DED-A41E-4DFE-AA58-08DBAF946603`)
   
   }

}
