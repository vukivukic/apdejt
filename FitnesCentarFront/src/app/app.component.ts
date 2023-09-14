import { Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DodajKlijentaComponent } from './dodaj-klijenta/dodaj-klijenta.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table'; 
import { ClanService } from './services/clan.service';
import { PregledComponent } from './pregled/pregled.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  displayedColumns: any[] = [
  'id',
  'ime', 
  'prezime', 
  'email', 
  'adresa', 
  // 'radiobtn',
  // 'brTelefona',
  // 'action'
];
  dataSource!: MatTableDataSource<any>;
  clanovi: any[] = []
  searchText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _clanService: ClanService) {}
    
  dodajForma() {
      // const ref =this._dialog.open(DodajKlijentaComponent)
      // ref.afterClosed().subscribe({
      //   next: (val) => {
      //     this._clanService.getClanovi()
      //   }
      // })
    }


  ngOnInit(): void {

  }


  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  izbrisiClana(id: number){
    this._clanService.izbrisiClana(id).subscribe({

      next: (res) => {
        alert("Obrisan!");
        this._clanService.getClanovi()
      },
      error: console.log
      
    })
  }
  
}
