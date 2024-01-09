import { Component, OnDestroy, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '@app/utility';
import { Subject, takeUntil } from 'rxjs';
import { noWhitespaceValidator } from 'src/app/core/validators/noWhiteSpace';
import { passwordMatchValidator } from 'src/app/core/validators/password';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy{

  destroySubject = new Subject();

  signupService = inject(SignupService)

  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, noWhitespaceValidator]),
    email: new FormControl<string>('', [Validators.required, Validators.email, noWhitespaceValidator]),
    password: new FormControl<string>('', [Validators.required, noWhitespaceValidator]),
    confirmPassword: new FormControl<string>(''),
  }, {
    validators: passwordMatchValidator
  })

  submit() {
    if (this.form.valid) {

      const { name, email, password } = this.form.getRawValue();


      this.signupService.signup({
        name: String(name),
        email: String(email),
        password: String(password)
      }).pipe(takeUntil(this.destroySubject)).subscribe((authData: Authentication) => {
        if(authData.isLogged){
          this.signupService.redirectAfterSignup();
        }
      })
    }
  }

  ngOnDestroy(): void {
      this.destroySubject.next(null);
      this.destroySubject.complete()
  }

}
