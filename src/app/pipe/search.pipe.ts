import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || items.length === 0) return [];
    if (!searchText || searchText.length < 3) return items;
    searchText = searchText.toLowerCase();
    const filteredItems = items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
    return filteredItems.length > 0 ? filteredItems : [];
  }
}
