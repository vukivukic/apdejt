import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { DodajTerminService } from '../termin.service';
import { DodajTerminComponent } from '../dodaj-termin/dodaj-termin.component';

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent {

  termin: any[] = []

  displayedColumns: any[] = [
    //'id',
    'tipTreninga',
    'Instruktor',
    'lokacija',
    'vreme',
    'Maxbrpolaznika'

  ]



  constructor(private _dialog:MatDialog, private coreService: CoreService, private terminService: DodajTerminService ) {}

  ngOnInit(): void {
    this.terminService.refresh.subscribe(() => {
      this.nadjiTermine();
    })
    this.nadjiTermine();

  }

  private nadjiTermine(){
    // this.terminService.getTermin().subscribe(
    //   (response => this.termin = response))
    

    

  }

  dodajForma() {
    const ref =this._dialog.open(DodajTerminComponent);
    ref.afterClosed().subscribe({
      next: (val) => {
        //this.terminService.getTermin()
      }
    })
  }
  // izbrisiOpremu(id: number){
  //   this.terminService.izbrisiOpremu(id).subscribe({

  //     next: (val) => {
  //       //alert("Obrisan!");
  //       this.coreService.openSnackBar('Oprema uspesno obrisana!');
        
  //     },
  //     error: console.log
  //   })
  // }

  openEditForm(data: any){
    this._dialog.open(DodajTerminService, {
      data,

    });
  }


}