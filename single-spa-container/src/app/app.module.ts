import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from '@core/services/route-reuse-strategy';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BaseComponent } from './layout/base/base.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: MicroFrontendRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
