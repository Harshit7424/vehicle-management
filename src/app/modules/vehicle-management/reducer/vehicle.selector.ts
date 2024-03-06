import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState, Vehicle } from "./vehicle.state";

const getStateToLoadData = createFeatureSelector<Vehicle[]>('vehicle');

export const getVehicleList = createSelector(
    getStateToLoadData,
    (state: Vehicle[]) => state
)

export const selectSearchState = createFeatureSelector<SearchState>('vehicle');

export const selectSearchQuery = createSelector(
  selectSearchState,
  (state: SearchState) => state.searchQuery
);