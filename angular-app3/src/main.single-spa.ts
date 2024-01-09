import { NgZone, enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationStart, Router } from '@angular/router';

import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (true) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        getSingleSpaExtraProviders(),
        ...appConfig.providers
      ]
    })
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
