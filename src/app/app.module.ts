import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { HeaderComponent } from './header/header.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
