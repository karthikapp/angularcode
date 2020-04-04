import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnamepipe'
})
export class SearchnamepipePipe implements PipeTransform {

  transform(items: any[], searchtext: string): any[] {
    if(!items) return [];
    if(!searchtext) return items;
searchtext = searchtext.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().includes(searchtext);
    });
   }
}