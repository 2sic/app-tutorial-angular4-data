import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { DevSettingsProvider } from "app/dev-settings.provider";
import { ContentResourceFactory } from "tosic/sxc/sxc-content.service";
import { Http2SxcHttpProvider } from "tosic/sxc/http-interceptor.service.provider";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DevSettingsProvider, SxcAngular, ContentResourceFactory, Http2SxcHttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
