
import { enableProdMode, NgZone } from '@angular/core';

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

    const extraProviders = getSingleSpaExtraProviders();

    return bootstrapApplication(AppComponent, {
      providers: [
        extraProviders,
        ...appConfig.providers
      ]
    })
  },
  template: '<navbar-root />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;


