import { Component, Input } from '@angular/core';
import { Vehicle } from '../../reducer/vehicle.state';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../popup/confirm/confirm.component';
import { VehicleModalComponent } from '../../popup/vehicle-modal/vehicle-modal.component';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent {
  @Input() data!: Vehicle;

  constructor(
    private dialog: MatDialog
  ) { }

  onEdit(vehicle: Vehicle) {
    const body = {
      title: "Update Vehicle",
      action: 'update',
      data: vehicle
    }
    this.dialog.open(VehicleModalComponent, {
      panelClass: 'modal',
      data: body
    })
  }

  onDelete(vehicle: Vehicle) {
    this.dialog.open(ConfirmComponent, {
      panelClass: 'modal',
      data: vehicle
    })
  }
}
