import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { VehicleModalComponent } from '../../popup/vehicle-modal/vehicle-modal.component';

@Component({
  selector: 'app-vehicle-head',
  templateUrl: './vehicle-head.component.html',
  styleUrls: ['./vehicle-head.component.css']
})
export class VehicleHeadComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() emitSearch = new EventEmitter();
  search: string = '';

  constructor(
    private readonly store: Store<Store>,
    private dialog: MatDialog
  ) { }

  openVehicleModal() {
    const body = {
      title: "Add Vehicle",
      action: "add"
    }
    this.dialog.open(VehicleModalComponent, {
      panelClass: 'modal',
      data: body
    })
  }
}
