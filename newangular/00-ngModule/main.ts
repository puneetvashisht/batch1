///<reference path="./../typings/globals/core-js/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);
