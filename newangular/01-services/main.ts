///<reference path="./../typings/globals/core-js/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HomeModule } from './app/home/home.module';


platformBrowserDynamic().bootstrapModule(HomeModule);
