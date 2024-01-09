import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Authentication, MFERoutes, getSession } from '@app/utility';
import { Subject, takeUntil } from "rxjs";

export const canActivateSignup: CanActivateFn = () => {
    const router = inject(Router);
  
    const unsubscriberSubject = new Subject();
  
    getSession().pipe(takeUntil(unsubscriberSubject)).subscribe((authState: Authentication) => {
  
      if(authState.isLogged){
        router.navigateByUrl(String(MFERoutes.get('dashboard')?.url));
      }
  
      unsubscriberSubject.complete();
    })
  
    return true;
  }