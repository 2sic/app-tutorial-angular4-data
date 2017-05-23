import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DnnService } from "dnn/dnn.service";
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { DevSettingsProvider } from "app/dev-settings.provider";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DevSettingsProvider, SxcAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
