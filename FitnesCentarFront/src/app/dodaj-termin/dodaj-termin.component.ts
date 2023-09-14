import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DodajTerminService } from '../termin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';


@Component({
  selector: 'app-dodaj-termin',
  templateUrl: './dodaj-termin.component.html',
  styleUrls: ['./dodaj-termin.component.scss']
})
export class DodajTerminComponent {
  fitnesForm: FormGroup;
  id: any;
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private _ff: FormBuilder, private terminService: DodajTerminService, private _dialogRef: MatDialogRef<DodajTerminComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private coreService: CoreService, private http: HttpClient){


    this.fitnesForm = this._ff.group({
     // id:'',
     idTipaT: '',
     idIns: '',
     vreme: '',
     lokacija: '',
     maxBrClanova: ''

    })
  }
  idTipaT:any = [];
  idIns:any =[];

  ngOnInit(): void {
    // this.tipTreninga = this.terminService.tipTreninga()
     this.terminService.tipTreninga().subscribe(dataa => {
      this.idTipaT = dataa;
     })

     this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'imeInstruktora',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
    };

  
    
  };

  
  
//   change(instruktor: Event) {
//     console.log((instruktor.target as HTMLInputElement).value);
// }
change(){
  return this.http.get(`https://localhost:7049/api/TipTreninga/nadjiInstruktoraPoTipuT?IdTipT=`+this.idTipaT).subscribe(data=> { this.idIns = data})  
  }


  onFormSubmit(){
    // if(this.fitnesForm.valid){
    //   if(this.data){
    //     this.terminService.updateTrening(this.data.id, this.fitnesForm.value).subscribe(
    //       (response) => {
    //        // console.log(response);
    //        // alert('Korisnik uspesno izmenjen')
    //         this.coreService.openSnackBar('Oprema uspesno izmenjena');
    //         this._dialogRef.close()
    //       },
    //       (error) =>{
    //         console.error('Error', error);
    //       }
    //     )


    //   }else{
      const submitValue = {...this.fitnesForm.value, idIns: this.idIns.map((obj: any) => obj.id)}
        this.terminService.dodajTermin(submitValue).subscribe(
          (response) => {
            console.log('Sacuvan', response);
            //alert('Sacuvan')
            this.coreService.openSnackBar('Termin uspesno sacuvan');
            this._dialogRef.close()
          },
          (error) =>{
            console.error('Error', error);
          }
        )

      

  
  





}
}
