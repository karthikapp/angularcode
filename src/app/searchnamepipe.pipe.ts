import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnamepipe'
})
export class SearchnamepipePipe implements PipeTransform {

  transform(items[]: any, searchtext: any ): any {
    console.log("called", searchtext)
    if(!items) return []
    if(!searchtext) return items
    searchtext = searchtext.toLoweCase()
    return items.filter((item) => {
      item.toLoweCase().incluses(searchtext)
    })

    // return items.fiter(item = > {
    //   return item
    // })
  }

}
