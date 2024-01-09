import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateLogin } from './core/guards/authGuard';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SigninComponent } from './pages/signin/signin.component';



export const routes: Routes = [
  {
    path: 'angular1',
    canActivate: [canActivateLogin],
    children: [
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
