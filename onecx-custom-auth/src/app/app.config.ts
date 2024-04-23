import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ApplicationConfig } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
