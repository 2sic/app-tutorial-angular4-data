import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SxcAngular } from "tosic/sxc/sxc-angular";
import { ContentResourceFactory } from "tosic/sxc/sxc-content.service";
import { SxcHttpProvider } from "tosic/sxc/sxc-http.provider";
import { DevSettingsProvider } from "dev/dev-settings.provider";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DevSettingsProvider, SxcAngular, ContentResourceFactory, SxcHttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
