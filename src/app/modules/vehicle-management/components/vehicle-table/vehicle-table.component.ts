import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Vehicle, VehicleModel } from '../../reducer/vehicle.state';
import { getVehicleList, selectSearchQuery } from '../../reducer/vehicle.selector';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent {
  @Input() search!: string;
  searchQuery!: string;

  displayHeaders: string[] = ['Vehicle No', 'Modal No', 'Manufacture', 'Vehicle Type', 'Created At', ''];
  vehicleList: Vehicle[] = []

  constructor(
    private readonly store: Store<{ vehicle: VehicleModel }>
  ) {

    this.store.select(getVehicleList).subscribe({
      next: (data: Vehicle[]) => {
        this.vehicleList = data
      }
    });

    this.store.select(selectSearchQuery).subscribe({
      next: (query) => {
        this.searchQuery = query;
      }
    })
  }
}
