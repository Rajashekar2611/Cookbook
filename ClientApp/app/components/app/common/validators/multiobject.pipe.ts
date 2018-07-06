import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ObjNgFor',  pure: false })
export class ObjNgFor implements PipeTransform {
    transform(value: Object): Array<string> { return Object.keys(value); }
}

@Pipe({
    name: 'phone'
})
export class PhonePipe{
    transform(val, args) {
        val = val.charAt(0) != 0 ? '0' + val : '' + val;
        let newStr = '';
        let i;

        for(i=0; i < (Math.floor(val.length/2) - 1); i++){
           newStr = newStr+ val.substr(i*2, 2) + '-';
        }
        return newStr+ val.substr(i*2);
    }
}