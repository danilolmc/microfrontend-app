import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { canActivateHome } from './core/guards/authGuard';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [canActivateHome],
        component: HomeComponent
    },
    {
        path: '**',
        component: EmptyRouteComponent
    },
];
