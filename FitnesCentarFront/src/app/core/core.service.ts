import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(poruka: string, action: string = ' done ') {
    this._snackBar.open(poruka, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
