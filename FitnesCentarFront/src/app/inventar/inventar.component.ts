import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ClanService } from '../services/clan.service';
import { DodajInventarComponent } from '../dodaj-inventar/dodaj-inventar.component';
import { InventarService } from '../services/inventar.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-inventar',
  templateUrl: './inventar.component.html',
  styleUrls: ['./inventar.component.scss']
})
export class InventarComponent implements OnInit {

  oprema: any[] = []

  displayedColumns: any[] = [
    //'id',
    'naziv',
    'vrsta',
    'opis',
    'kolicina',
    'action'

  ]



  constructor(private _dialog:MatDialog, private invService: InventarService, private coreService: CoreService ) {}

  ngOnInit(): void {
    this.invService.refresh.subscribe(() => {
      this.nadjiSvuOpremu();
    })
    this.nadjiSvuOpremu();

  }

  private nadjiSvuOpremu(){
    this.invService.getOprema().subscribe(
      (response => this.oprema = response))
    

    

  }

  dodajForma() {
    const ref =this._dialog.open(DodajInventarComponent);
    ref.afterClosed().subscribe({
      next: (val) => {
        this.invService.getOprema()
      }
    })
  }
  // ngOnInit(): void {
  //   this.invService.getOprema().subscribe(response =>
  //     this.oprema = response);
  // }

  izbrisiOpremu(id: number){
    this.invService.izbrisiOpremu(id).subscribe({

      next: (val) => {
        //alert("Obrisan!");
        this.coreService.openSnackBar('Oprema uspesno obrisana!');
        
      },
      error: console.log
    })
  }

  openEditForm(data: any){
    this._dialog.open(DodajInventarComponent, {
      data,

    });
  }


}
