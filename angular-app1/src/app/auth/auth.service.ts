import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationManagement, getSession } from '@app/utility';
import { customMFERoutes } from '../core/navigation';
import { UserCredential } from '../domain/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authManagement = AuthenticationManagement();

  constructor(private router: Router) { }

  signin(userData: UserCredential) {
    
    this.authManagement.login({
      login: userData.email,
      password: userData.password,
    })


    return getSession();
  }

  redirectAfterLogin(){
    const route = String(customMFERoutes.dashboard)
    this.router.navigate([route])
  }

  isUserLogged(){
    return this.authManagement.getSession()
  }
}
