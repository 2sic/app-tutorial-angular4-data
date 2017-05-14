import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { $2sxcProvider } from "tosic/sxc/$2sxc.provider";
import { sxcInstanceDomProvider } from "tosic/sxc/sxcInstance.dom.provider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [$2sxcProvider, sxcInstanceDomProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
