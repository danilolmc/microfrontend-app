import { AbstractControl } from "@angular/forms";

type WhiteSpaceError = {
    whitespace: boolean
} | null


export function noWhitespaceValidator(control: AbstractControl): WhiteSpaceError {
    if (control.value && /^\s*$/.test(control.value)) {
        return { 'whitespace': true };
    }
    return null;
}