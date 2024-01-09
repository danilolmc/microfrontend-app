import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { config } from '@app/utility';

export const Endpoints = {
  products: `${config().api_url}/products`
}


export const API_ENDPOINTS = new InjectionToken<typeof Endpoints>('API_ENDPOINTS_PROVIDER');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: API_ENDPOINTS,
      useValue: Endpoints
    }]
};
