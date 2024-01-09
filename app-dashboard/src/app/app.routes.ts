import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { getSession } from '@app/utility';
import { customMFERoutes } from './core/navigation';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



export const canActivateDashboard: CanActivateFn = () => {
    const router = inject(Router);


    if (!getSession().value.isLogged) {

        router.navigateByUrl(String(customMFERoutes.signin));

    }

    return true;
}

export const routes: Routes = [

    {
        path: 'dashboard',
        canActivate: [canActivateDashboard],
        children: [
            {
                path: 'home',
                component: DashboardComponent
            }
        ]
    }
];
