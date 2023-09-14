import { Component, Inject, OnInit } from '@angular/core';
import { InstruktorService } from '../services/instruktor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DodajInstruktoraComponent } from '../dodaj-instruktora/dodaj-instruktora.component';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-instruktor',
  templateUrl: './instruktor.component.html',
  styleUrls: ['./instruktor.component.scss']
})
export class InstruktorComponent implements OnInit {

  instruktori: any[] = []

  imeInstruktora = '';
  prezimeInstruktora = '';

  displayedColumns: any[] = [
    //'id',
    'imeInstruktora',
    'prezimeInstruktora',
    'mailInstruktora',
    'telefonInstruktora',
    //'instruktorDrzi',
    'action'

  ]



  constructor(private _dialog:MatDialog, private instService: InstruktorService, private coreService: CoreService ) {}

  ngOnInit(): void {
    this.instService.refresh.subscribe(() => {
      this.nadjiSvuOpremu();
    })
    this.nadjiSvuOpremu();

  }

  private nadjiSvuOpremu(){
    this.instService.getInstruktori().subscribe(
      (response => this.instruktori = response))
    

    

  }

  dodajForma() {
    const ref =this._dialog.open(DodajInstruktoraComponent);
    ref.afterClosed().subscribe({
      next: (val) => {
        this.instService.getInstruktori()
      }
    })
  }
  // ngOnInit(): void {
  //   this.invService.getOprema().subscribe(response =>
  //     this.oprema = response);
  // }

  izbrisiOpremu(id: number){
    this.instService.izbrisiInstruktora(id).subscribe({

      next: (val) => {
        this.coreService.openSnackBar('Korisnik uspesno obrisan');
      },
      error: console.log
    })
  }

  openEditForm(data: any){
    this._dialog.open(DodajInstruktoraComponent, {
      data,

    });
  }

  Search(){
    if(this.imeInstruktora != "" || this.prezimeInstruktora != ""){
    this.instruktori = this.instruktori.filter(res => {
      return res.imeInstruktora.toLocaleLowerCase().match(this.imeInstruktora.toLocaleLowerCase()) || res.prezimeInstruktora.toLocaleLowerCase().match(this.prezimeInstruktora.toLocaleLowerCase() || this.imeInstruktora.toLocaleLowerCase());
    })
  }else if(this.imeInstruktora == "" || this.prezimeInstruktora == ""){
    this.ngOnInit()
  }
  }



}
