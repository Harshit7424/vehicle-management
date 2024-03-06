import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehicleManagementRoutingModule } from './vehicle-management-routing.module';
import { VehicleManagementComponent } from './vehicle-management.component';
import { VehicleContainerComponent } from './components/vehicle-container/vehicle-container.component';
import { VehicleHeadComponent } from './components/vehicle-head/vehicle-head.component';
import { VehicleTableComponent } from './components/vehicle-table/vehicle-table.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleModalComponent } from './popup/vehicle-modal/vehicle-modal.component';
import { ConfirmComponent } from './popup/confirm/confirm.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    VehicleManagementComponent,
    VehicleContainerComponent,
    VehicleHeadComponent,
    VehicleTableComponent,
    VehicleItemComponent,
    VehicleModalComponent,
    ConfirmComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    VehicleManagementRoutingModule,

    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatAutocompleteModule,
    MatButtonModule
  ]
})
export class VehicleManagementModule { }
