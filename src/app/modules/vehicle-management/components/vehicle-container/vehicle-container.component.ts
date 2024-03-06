import { Component } from '@angular/core';
import { VehicleModel } from '../../reducer/vehicle.state';
import { Store } from '@ngrx/store';
import { getVehicles } from '../../reducer/vehicle.action';

@Component({
  selector: 'app-vehicle-container',
  templateUrl: './vehicle-container.component.html',
  styleUrls: ['./vehicle-container.component.css']
})
export class VehicleContainerComponent {
  searchKey = '';
  constructor(private readonly store: Store<{vehicle: VehicleModel}>) {this.store.dispatch(getVehicles())}

  performAction(event: any) {
    if(event?.action == 'search') this.searchKey = event?.search;
  }

}
