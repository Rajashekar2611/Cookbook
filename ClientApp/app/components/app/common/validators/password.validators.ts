import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
static passwordsShouldMatch(control:AbstractControl):ValidationErrors |null {
let password=control.get('password');
let confirmpasword=control.get('confirmpassword');
            if(password!==confirmpasword)
            return {passwordsShouldMatch:true};
            
            return null;
   }   
}