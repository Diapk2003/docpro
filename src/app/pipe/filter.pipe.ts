import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(patientlist: any, searchText: string): any {
    // if (!patientlist || !searchText.trim().length) {
    //   return patientlist;
    // }
    // else {
    //   return patientlist.filter((patientlist: { patientname: string }) =>
    //     patientlist.patientname.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())

    //   )
    // }
  }

}
