import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { DnnService } from "dnn/dnn.service";
import { SxcNg } from "tosic/sxc/$2sxc";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SxcNg /* sxcInstance, DnnService*/    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
