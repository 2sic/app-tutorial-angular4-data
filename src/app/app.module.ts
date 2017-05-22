import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstance } from "tosic/sxc/sxcInstance";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [$2sxc, sxcInstance],
  bootstrap: [AppComponent]
})
export class AppModule { }
