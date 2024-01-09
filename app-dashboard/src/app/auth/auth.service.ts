import { Injectable } from '@angular/core';
import { AuthenticationManagement } from '@app/utility';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authManagement = AuthenticationManagement();

  isUserLogged(){
    
    return this.authManagement.getSession()
  }
}
