import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleContainerComponent } from './components/vehicle-container/vehicle-container.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleManagementRoutingModule { }
