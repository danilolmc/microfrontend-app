import { AbstractControl, FormGroup } from "@angular/forms";

export function passwordMatchValidator(formGroup: AbstractControl) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if ((password !== '' && confirmPassword !== '') && password === confirmPassword) {
      return null; 
    } else {
      return { passwordMismatch: true }; 
    }
  }
