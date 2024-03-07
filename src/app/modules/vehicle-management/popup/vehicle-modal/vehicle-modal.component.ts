import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../../reducer/vehicle.state';
import { Store } from '@ngrx/store';
import { addVehicles, updateVehicle } from '../../reducer/vehicle.action';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent {

  vehicleNo!: string;
  manufacture!: string;
  modalNo!: string;
  vehicleType!: string;

  manufactureOptions: any[] = [
    {
      "modelList": [
        {
          "chassisType": {
            "name": "prc vehicles",
            "externalId": null,
            "uuid": "0b0a04fb-72c5-49a7-af08-38ef5667fff8",
            "orgId": "495b8728-c761-4fa7-83fe-db75a7d63221"
          },
          "chassis_series": null,
          "name": "88888888"
        }
      ],
      "name": "prc tested",
    },
    {
      "modelList": [
        {
          "chassisType": {
            "name": "123",
            "externalId": null,
            "uuid": "b25d76f3-a102-46b4-8b0d-27ef804222a0",
            "orgId": "495b8728-c761-4fa7-83fe-db75a7d63221"
          },
          "chassis_series": null,
          "name": "123456"
        },
        {
          "chassisType": {
            "name": "3516",
            "externalId": null,
            "uuid": "b493cc76-2f4a-4717-89fe-617d04ee02b5",
            "orgId": "495b8728-c761-4fa7-83fe-db75a7d63221"
          },
          "chassis_series": null,
          "name": "6546"
        }
      ],
      "name": "6464",
    },
  ];
  filteredManufactureOptions!: Observable<any>;


  modalNoOptions: any[] = [];
  filteredModalNoOptions!: Observable<any[]>;


  vehicleTypeOptions: any[] = [
    {
      name: 'rey'
    },
    {
      name: 'create7'
    },
    {
      name: 'chandra'
    }

  ]
  filteredVehicleTypeOptions!: Observable<any[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly dialog: MatDialogRef<VehicleModalComponent>,
    private readonly store: Store<Store>,
  ) {

  }
  ngOnInit(): void {
    this.validateAction()
  }

  onChangeModalNo(event: any) {
    this.filteredModalNoOptions = of(this._filter(event.target.value || '', this.modalNoOptions))
  }

  onChangeVehicleType(event: any) {
    this.filteredVehicleTypeOptions = of(this._filter(event.target.value || '', this.vehicleTypeOptions))
  }

  onChangeManufacture(event: any) {
    this.filteredManufactureOptions = of(this._filter(event.target.value || '', this.manufactureOptions))
  }

  private _filter(value: string, options: any): string[] {
    const filterValue = value.toLowerCase();

    return options.filter((option: any) => option?.name?.toLowerCase().includes(filterValue));
  }

  onSelectionChange(event: any) {
    this.updateModelList(event.option.value)
    this.modalNo = '';
  }

  updateModelList(value: string) {
    this.manufactureOptions.find(m => {
      if (m.name === value) {
        this.modalNoOptions = m.modelList
        this.filteredModalNoOptions = of([])
      }
    })
  }

  setFromValue(data: Vehicle) {
    this.vehicleNo = data?.vehicleNo;
    this.vehicleType = data?.vehicleType;
    this.manufacture = data?.manufacture;
    this.modalNo = data?.modalNo;

    this.updateModelList(data.manufacture)
  }

  validateAction() {
    switch (this.data.action) {
      case 'update':
        this.setFromValue(this.data.data);
        break
    }
  }

  vehicleFormValid() {
    return !!this.vehicleNo && !!this.manufacture && !!this.modalNo && !!this.vehicleType
  }

  getRowValue(): Vehicle {
    return {
      vehicleNo: this.vehicleNo,
      modalNo: this.modalNo,
      manufacture: this.manufacture,
      vehicleType: this.vehicleType,
      createdAt: new Date().toString()
    }
  }

  onSubmit() {
    if (this.vehicleFormValid()) {
      const addVehicle = {
        valid: true,
        data: this.getRowValue()
      }
      switch (this.data.action) {
        case 'add':
          this.store.dispatch(addVehicles({ vehicle: this.getRowValue() }))
          break
        case 'update':
          this.store.dispatch(updateVehicle({ vehicle: this.getRowValue() }))
          break
      }
      this.dialog.close()
    }
  }

  close() {
    this.dialog.close()
  }
}
