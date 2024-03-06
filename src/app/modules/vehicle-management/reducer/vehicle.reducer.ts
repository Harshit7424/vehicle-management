import { createReducer, on } from "@ngrx/store"
import { vehicleState } from "./vehicle.state"
import { addVehicles, deleteVehicle, getVehicles, resetSearchVehicle, searchVehicle, updateVehicle } from "./vehicle.action"

const _vehicleReducer = createReducer(vehicleState, 
        on(addVehicles, (state, param) => {
            const newState = [...state, param.vehicle]
            return newState
        }),

        on(getVehicles, (state) => {
            return state
        }),

        on(updateVehicle, (state, param) => {
            const updateState = state.map(vehicle => {
                if (vehicle.vehicleNo === param.vehicle.vehicleNo) {
                    return param.vehicle
                } 
                return  vehicle
            })
            return updateState
        }),

        on(deleteVehicle, (state, param) => {
           return state.filter(vehicle => vehicle.vehicleNo !== param.vehicleNo)
        }),

        on(searchVehicle, (state) => ({ ...state })),

        on(resetSearchVehicle, (_state) => {
            return vehicleState
        }),
    )

export function VehicleReducer(state: any, action: any) {
    return _vehicleReducer(state, action)
}