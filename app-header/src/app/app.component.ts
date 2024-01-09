import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationManagement, MFERouteObjectType, getSession } from '@app/utility';
import { Subject, map, takeUntil } from 'rxjs';
import { customMFERoutes } from './app.routes';

@Component({
  selector: 'navbar-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  destroySubject = new Subject();
  
  profileDropDownIsOpen = signal(false)

  menuIsOpen = signal(false)

  router = inject(Router)

  authManagement = AuthenticationManagement()

  isLogged = signal(false);

  toggleMenu(menu: WritableSignal<boolean>) {
    menu.set(!menu())
  }

  logoff() {
    this.authManagement.logoff()
      .pipe(map(authState => authState.isLogged), takeUntil(this.destroySubject))
      .subscribe(loginState => {
        this.isLogged.set(loginState)
        if(!loginState){
          this.navigate('signin')
        }
      });

    this.profileDropDownIsOpen.set(false);
  }

  ngOnInit(): void {

    getSession().pipe(takeUntil(this.destroySubject)).subscribe(data => {
      this.isLogged.set(!!data?.isLogged)
    })
  }


  navigate(route: keyof MFERouteObjectType) {
    this.router.navigateByUrl(String(customMFERoutes[route]))
  }

  ngOnDestroy(): void {
    this.destroySubject.next(null);
    this.destroySubject.complete();
  }

}
