import { createAction, props } from "@ngrx/store";
import { Vehicle } from "./vehicle.state";

// Vehicle CRUD Actions
export const addVehicles = createAction('addVehicles', props<{vehicle:Vehicle}>());
export const getVehicles = createAction('getVehicles');
export const updateVehicle = createAction('updateVehicle', props<{vehicle: Vehicle}>());
export const deleteVehicle = createAction('deleteVehicle', props<{vehicleNo: string}>());

// Search Action 
export const searchVehicle = createAction('searchVehicle', props<{searchQuery: string}>())
export const resetSearchVehicle = createAction('resetSearchVehicle')