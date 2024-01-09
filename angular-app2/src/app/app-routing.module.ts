import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SignupComponent } from './pages/signup/signup.component';



export const routes: Routes = [
  {
    path: 'angular2',
    // canActivate: [canActivateLogin],
    children: [
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
