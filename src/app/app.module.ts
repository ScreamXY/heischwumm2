import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, UpgradeComponent, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { MainDirective } from './main.component';

import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-route';
import { Main } from './main.component';
angular
  .module('heischwumm2', [ ])
  .directive('appRoot', downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory)
  .component('main', Main);

@NgModule({
  declarations: [
    AppComponent,
    MainDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [ ]
})
export class AppModule {
  ngDoBootstrap() { }
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['heischwumm2']);
});