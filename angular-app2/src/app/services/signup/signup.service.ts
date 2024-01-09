import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { customMFERoutes } from '../../core/navigation';
import { UserSignupData } from '../../domain/user';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AuthenticationManagement, SessionUserDataManagement, getSession } from '@app/utility';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  router = inject(Router);
  localStorage = inject(LocalStorageService);
  authManagement = AuthenticationManagement()
  sessionUserDataManagement = SessionUserDataManagement();

  signup(userData: UserSignupData) {

    this.authManagement.login({ login: userData.email, password: userData.password, });

    this.sessionUserDataManagement.saveUserData({ name: userData.name })

    return getSession();
  }

  redirectAfterSignup() {
    const route = String(customMFERoutes.dashboard)
    this.router.navigate([route])
  }

}
