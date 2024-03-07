import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../reducer/vehicle.state';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  
  transform(vehicles: Vehicle[], searchQuery: string): any {
    if (!searchQuery) {
      return vehicles;
    }

    searchQuery = searchQuery.trim()

    const searchResult = vehicles.filter(vehicles => JSON.stringify(vehicles).toLowerCase().includes(searchQuery.toLowerCase()));
    return searchResult
  }
}
