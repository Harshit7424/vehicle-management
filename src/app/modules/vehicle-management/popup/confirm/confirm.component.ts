import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { deleteVehicle } from '../../reducer/vehicle.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  constructor(
    private dialog: MatDialogRef<ConfirmComponent>,
    private readonly store: Store<Store>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  close(action='') {
    switch (action) {
      case 'delete':
        this.store.dispatch(deleteVehicle({vehicleNo: this.data.vehicleNo}))
        break
      }
      this.dialog.close({})
  }

}
