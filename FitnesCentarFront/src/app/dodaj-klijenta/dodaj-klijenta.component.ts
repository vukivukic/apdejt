import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClanService } from '../services/clan.service';
import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-dodaj-klijenta',
  templateUrl: './dodaj-klijenta.component.html',
  styleUrls: ['./dodaj-klijenta.component.scss']
})
export class DodajKlijentaComponent implements OnInit{

  clanovi: any[] = []


  fitnesForm: FormGroup;

  submitted = false;
 

  // novaForma = new FormGroup({
  //   id: new FormGroup(''),
  //   imeClana:new FormGroup('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),

  // })

  // get imeClana(){
  //   return this.novaForma.get('imeClana');
  // }
  

  constructor(private _ff: FormBuilder, private _clanService: ClanService, private _dialogRef: MatDialogRef<DodajKlijentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private coreService: CoreService){ //public

    this.fitnesForm = this._ff.group({
      id:'',
      imeClana:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      prezimeClana:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      mailClana:['', [Validators.required, Validators.email]],
      //isDisabled: '',
      //radiobtn:'',
      telefonClan:['', [Validators.required, Validators.pattern('[0-9]*')]],
      adresaClana:['', [Validators.required]],

    })


  }
  // get imeClana(){
  //   return this.fitnesForm.get('imeClana');
  // }

  onFormSubmit(){

    this.submitted = true;

    if(this.fitnesForm.invalid){
      return 
    }
    this.coreService.openSnackBar('Korisnik uspesno sacuvan');


    if(this.fitnesForm.valid){
      if(this.data){
        this._clanService.updateClan(this.data.id, this.fitnesForm.value).subscribe(
          (response) => {
           // console.log(response);
            //alert('Korisnik uspesno izmenjen')
            this.coreService.openSnackBar('Korisnik uspesno izmenjen');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )


      }else{
        this._clanService.dodajClana(this.fitnesForm.value).subscribe(
          (response) => {
            console.log('Sacuvan', response);
            //alert('Sacuvan')
            this.coreService.openSnackBar('Korisnik uspesno sacuvan');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )

      }

    }
    

}
ngOnInit(): void{
  this.fitnesForm.patchValue(this.data);

  

}



}





    

