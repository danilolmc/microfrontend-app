import { Routes } from '@angular/router';
import { MFERouteObjectType } from '../types';
import { MFERoutes } from '@app/utility';

export const customMFERoutes: MFERouteObjectType = {
    'signup': `#/${String(MFERoutes.get('signup')?.url)}`,
    'signin': `#/${String(MFERoutes.get('signin')?.url)}`,
    'dashboard': `#/${String(MFERoutes.get('dashboard')?.url)}`,
};


export const routes: Routes = [];
