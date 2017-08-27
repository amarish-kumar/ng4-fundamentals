import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class Truncate implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let addDots = args[1] === "true";    
    let maxLength = parseInt(args[0]);
        maxLength = typeof(maxLength) === "number" && maxLength >=0 ? maxLength : 25;        
    return (value || "").slice(0, maxLength) + ( addDots ? "..." : "")
  }

}
