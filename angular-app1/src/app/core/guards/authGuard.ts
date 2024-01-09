import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Authentication, getSession } from "@app/utility";
import { customMFERoutes } from "../navigation";

export const canActivateLogin: CanActivateFn = () => {
    const router = inject(Router);

    
    getSession().subscribe((authState: Authentication) => {

        if (authState.isLogged) {
            router.navigateByUrl(String(customMFERoutes.dashboard));
        } 

    })

    return true;
}