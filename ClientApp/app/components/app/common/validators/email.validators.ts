import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidators{
static uniqueEmail(control:AbstractControl):Promise<ValidationErrors |null> {
    return new Promise((resolve, reject ) => {

        setTimeout(() => {

            if(control.value==="shekhar2611@gmail.com")
                resolve ({ uniqueEmail : true})
              else  resolve (null);
            },2000);
    });
 }

}