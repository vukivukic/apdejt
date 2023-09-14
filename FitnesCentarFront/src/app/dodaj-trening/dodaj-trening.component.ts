import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreningService } from '../trening.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-dodaj-trening',
  templateUrl: './dodaj-trening.component.html',
  styleUrls: ['./dodaj-trening.component.scss']
})
export class DodajTreningComponent {

  trening: any[] = []


  fitnesForm: FormGroup;

  submitted = false;
 

  // novaForma = new FormGroup({
  //   id: new FormGroup(''),
  //   imeClana:new FormGroup('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),

  // })

  // get imeClana(){
  //   return this.novaForma.get('imeClana');
  // }
  

  constructor(private _ff: FormBuilder, private trnService: TreningService, private _dialogRef: MatDialogRef<DodajTreningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private coreService: CoreService){ //public

    this.fitnesForm = this._ff.group({
      //id:'',
      nazivTreninga:'',
      opisTreninga:''

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
        this.trnService.updateTrening(this.data.id, this.fitnesForm.value).subscribe(
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
        this.trnService.dodajTrening(this.fitnesForm.value).subscribe(
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
