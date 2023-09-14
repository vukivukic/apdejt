import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstruktorService } from '../services/instruktor.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InstruktorComponent } from '../instruktor/instruktor.component';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-dodaj-instruktora',
  templateUrl: './dodaj-instruktora.component.html',
  styleUrls: ['./dodaj-instruktora.component.scss']
})
export class DodajInstruktoraComponent {

  clanovi: any[] = []

  submitted= false;


  fitnesForm: FormGroup;
  

  constructor(private _ff: FormBuilder, private instService: InstruktorService, private _dialogRef: MatDialogRef<InstruktorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private coreService:CoreService){ //public

    this.fitnesForm = this._ff.group({
      id:'',
      imeInstruktora:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      prezimeInstruktora:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      mailInstruktora:['', [Validators.required, Validators.email]],
      //isDisabled: '',
      //radiobtn:'',
      telefonInstruktora:['', [Validators.required, Validators.pattern('[0-9]*')]],
     // adresaClana:'',
      //instruktorDrzi:''

    })
  }

  onFormSubmit(){
    this.submitted = true;

    if(this.fitnesForm.invalid){
      return 
    }
    //this.coreService.openSnackBar('Korisnik uspesno sacuvan');



    if(this.fitnesForm.valid){
      if(this.data){
        this.instService.updateInstroktora(this.data.id, this.fitnesForm.value).subscribe(
          (response) => {
           // console.log(response);
           this.coreService.openSnackBar('Instruktor uspesno izmenjen');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )


      }else{
        this.instService.dodajInstruktora(this.fitnesForm.value).subscribe(
          (response) => {
            console.log('Sacuvan', response);
            this.coreService.openSnackBar('Instruktor uspesno sacuvan');
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