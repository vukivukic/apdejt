import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ClanService } from '../services/clan.service';
import { DodajInventarComponent } from '../dodaj-inventar/dodaj-inventar.component';
import { InventarService } from '../services/inventar.service';
import { CoreService } from '../core/core.service';
import { TreningService } from '../trening.service';
import { DodajTreningComponent } from '../dodaj-trening/dodaj-trening.component';
@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.scss']
})
export class TreningComponent {

  trening: any[] = []
  dataSource!: MatTableDataSource<any>;

  displayedColumns: any[] = [
    //'id',
    'nazivTreninga',
    'opisTreninga',


  ]



  constructor(private _dialog:MatDialog, private trnService: TreningService, private coreService: CoreService ) {}

  ngOnInit(): void {
    this.trnService.refresh.subscribe(() => {
      this.nadjiSvuOpremu();
    })
    this.nadjiSvuOpremu();

  }

  private nadjiSvuOpremu(){
    this.trnService.getTrening().subscribe(
      (response => this.trening = response))
    

    

  }

  dodajForma() {
    const ref =this._dialog.open(DodajTreningComponent);
    ref.afterClosed().subscribe({
      next: (val) => {
        this.trnService.getTrening()
      }
    })
  }

  izbrisiOpremu(id: number){
    this.trnService.izbrisiTrening(id).subscribe({

      next: (val) => {
        //alert("Obrisan!");
        this.coreService.openSnackBar('Trening uspesno obrisan!');
        
      },
      error: console.log
    })
  }

  openEditForm(data: any){
    this._dialog.open(DodajTreningComponent, {
      data,

    });
  }

}
