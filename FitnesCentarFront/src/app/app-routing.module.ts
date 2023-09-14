import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PregledComponent } from './pregled/pregled.component';
import { TreningComponent } from './trening/trening.component';
import { InventarComponent } from './inventar/inventar.component';
import { InstruktorComponent } from './instruktor/instruktor.component';
import { TerminComponent } from './termin/termin.component';



const routes: Routes = [
  {path:"pregled", component:PregledComponent},
    {path:"trening", component:TreningComponent},
    {path:"inventar", component:InventarComponent},
    {path:"instruktor", component:InstruktorComponent},
    {path:"termin", component:TerminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
