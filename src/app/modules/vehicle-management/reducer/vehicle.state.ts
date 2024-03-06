export interface Vehicle {
  vehicleNo: string;
  modalNo: string;
  manufacture: string;
  vehicleType: string;
  createdAt: string;
}

export interface VehicleModel {
  vehicles: Vehicle[]
}

export interface SearchState {
  searchQuery: string;
}

export const initialState: SearchState = {
  searchQuery: ''
};

export const vehicleState: Vehicle[] = [
  { vehicleNo: 'UP18K90000', modalNo: '88888888', manufacture: 'prc tested', vehicleType: 'Truck-24MT', createdAt: new Date().toString() },
  { vehicleNo: 'HR23568765', modalNo: '123456', manufacture: '6464', vehicleType: 'Truck 23', createdAt: new Date().toString() }
]