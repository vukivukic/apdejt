import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DodajKlijentaComponent } from './dodaj-klijenta/dodaj-klijenta.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PregledComponent } from './pregled/pregled.component';
import { TreningComponent } from './trening/trening.component';
import { InventarComponent } from './inventar/inventar.component';
import { RouterModule, Routes } from '@angular/router';
import { DodajInventarComponent } from './dodaj-inventar/dodaj-inventar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { InstruktorComponent } from './instruktor/instruktor.component';
import { DodajInstruktoraComponent } from './dodaj-instruktora/dodaj-instruktora.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DodajTreningComponent } from './dodaj-trening/dodaj-trening.component';
import { TerminComponent } from './termin/termin.component';
import { DodajTerminService } from './termin.service';
import { DodajTerminComponent } from './dodaj-termin/dodaj-termin.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';





  // const routes: Routes = [
  //   {path:"pregled", component:PregledComponent},
  //   {path:"trening", component:TreningComponent},
  //   {path:"inventar", component:InventarComponent}

  // ];


@NgModule({
  declarations: [
    AppComponent,
    DodajKlijentaComponent,
    PregledComponent,
    InventarComponent,
    DodajInventarComponent,
    InstruktorComponent,
    DodajInstruktoraComponent,
    DodajTreningComponent,
    TreningComponent,
    TerminComponent,
    DodajTerminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatSlideToggleModule,
    FormsModule,
    MatSnackBarModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
