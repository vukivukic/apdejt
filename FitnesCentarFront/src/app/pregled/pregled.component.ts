import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClanService } from '../services/clan.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DodajKlijentaComponent } from '../dodaj-klijenta/dodaj-klijenta.component';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.scss']
})
export class PregledComponent implements OnInit {

  displayedColumns: any[] = [
   // 'id',
    'imeClana', 
    'prezimeClana', 
    'mailClana',
    
    //'radiobtn',
    'adresaClana',
     'telefonClan',

     //'isDisabled', 
     'action',
     //'action2'
  ];

  fitnesForm: FormGroup;
  clanovi: any[] = []
  dataSource!: MatTableDataSource<any>;
  imeClana= '';
  prezimeClana='';
  isDisable:boolean = false;


  constructor(private _ff: FormBuilder, private _clanService: ClanService, private _dialog: MatDialog, private coreService: CoreService){


    this.fitnesForm = this._ff.group({
      id:'',
      imeClana:'',
      prezimeClana:'',
      mailClana:'',
  
      //radiobtn:'',
      adresaClana:'',
      telefonClan:'',

      isDisabled: '',
      //operacija: ''

    })
  }


  ngOnInit(): void {
    this._clanService.refresh.subscribe(() => {
      this.nadjiSveClanove();
    })
    this.nadjiSveClanove();

  }

  private nadjiSveClanove(){
    this._clanService.getClanovi().subscribe(
      (response => this.clanovi = response))
    

    

  }


  onFormSubmit(){
    if(this.isDisable){
      return

    }
    this.isDisable = true;

  }

  // onDisableUser(){  
  //   this.isDisable = true;

  // }
  dodajForma() {
    const dRef =this._dialog.open(DodajKlijentaComponent);
    dRef.afterClosed().subscribe({
      next: (val) => {
        this._clanService.getClanovi()
      }
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  izbrisiClana(id: number){
    if(this.isDisable){
      return
    }

    this._clanService.izbrisiClana(id).subscribe({

      next: (res) => {
       // alert("Obrisan!");
        this.coreService.openSnackBar('Clan je uspesno obrisan');
      },
      error: console.log
      
    })
  }

  openEditForm(data: any){
    this._dialog.open(DodajKlijentaComponent, {
      data,

    });
  }


  Search(){
    if(this.imeClana != "" || this.prezimeClana != ""){
    this.clanovi = this.clanovi.filter(res => {
      return res.imeClana.toLocaleLowerCase().match(this.imeClana.toLocaleLowerCase()) || res.prezimeClana.toLocaleLowerCase().match(this.prezimeClana.toLocaleLowerCase() || this.imeClana.toLocaleLowerCase());
    })
  }else if(this.imeClana == "" || this.prezimeClana == ""){
    this.ngOnInit()
  }
  }



}
