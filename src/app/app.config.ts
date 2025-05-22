import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideKeycloak } from 'keycloak-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // https://github.com/mauriciovigolo/keycloak-angular/blob/main/docs/migration-guides/v19.md#bootstrapping-keycloak-with-providekeycloak
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:8060',
        realm: 'demo-otic-29',
        clientId: 'perueduca-movil'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
