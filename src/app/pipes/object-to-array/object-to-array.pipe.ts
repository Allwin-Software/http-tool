import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(objData: any) {
    if (objData === null || objData === undefined) {
      return [];
    } else {
      return Object.keys(objData).map((key) => {
        const item = {
          key: key,
          value: objData[key],
        };
        return item;
      });
    }
  }
}
