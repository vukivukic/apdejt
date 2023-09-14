import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClanService } from '../services/clan.service';
import { DialogRef } from '@angular/cdk/dialog';
import { InventarService } from '../services/inventar.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'app-dodaj-inventar',
  templateUrl: './dodaj-inventar.component.html',
  styleUrls: ['./dodaj-inventar.component.scss']
})
export class DodajInventarComponent implements OnInit{

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = [];


  fitnesForm: FormGroup;

  constructor(private _ff: FormBuilder, private invService: InventarService, private _dialogRef: MatDialogRef<DodajInventarComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private coreService: CoreService){

    this.fitnesForm = this._ff.group({
      id:'',
      naziv: '',
      vrsta: '',
      opis: '',
      kolicina: ''

    })
  }
  ngOnInit(): void {
    this.fitnesForm.patchValue(this.data)
    
  };

  onFormSubmit(){
    if(this.fitnesForm.valid){
      if(this.data){
        this.invService.updateOprema(this.data.id, this.fitnesForm.value).subscribe(
          (response) => {
           // console.log(response);
           // alert('Korisnik uspesno izmenjen')
            this.coreService.openSnackBar('Oprema uspesno izmenjena');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )


      }else{
        this.invService.dodajOpremu(this.fitnesForm.value).subscribe(
          (response) => {
            console.log('Sacuvan', response);
            //alert('Sacuvan')
            this.coreService.openSnackBar('Oprema uspesno sacuvana');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )

      }

  }
  





}
}
