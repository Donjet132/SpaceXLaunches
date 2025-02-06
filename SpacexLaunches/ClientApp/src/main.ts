import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfigModule } from './app/app.config';

platformBrowserDynamic().bootstrapModule(AppConfigModule)
  .catch(err => console.error(err));
