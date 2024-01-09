import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { noWhitespaceValidator } from 'src/app/core/validators/noWhiteSpace';
import { UserCredential } from 'src/app/domain/user';
import { customMFERoutes } from '../../core/navigation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnDestroy, OnInit {

  routes = customMFERoutes

  destroySubject = new Subject();

  authService = inject(AuthService)

  form = new FormGroup({
    email: new FormControl<string>('', [Validators.email, Validators.required, noWhitespaceValidator]),
    password: new FormControl<string>('', [Validators.required, noWhitespaceValidator])
  });


  signin() {
    const formValue = this.form.value as UserCredential;

    this.authService.signin(formValue).pipe(takeUntil(this.destroySubject)).subscribe(() => {

      this.authService.redirectAfterLogin()

    });
  }
  
  ngOnInit(): void {
    console.log(customMFERoutes.signin)
      
  }

  ngOnDestroy(): void {
    this.destroySubject.next(null);
    this.destroySubject.complete();
  }
}
