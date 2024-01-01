import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFancyComponentComponent } from './my-fancy-component/my-fancy-component.component';
import { MyFancyComponent2Component } from './my-fancy-component-2/my-fancy-component-2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFancyComponentComponent,
    MyFancyComponent2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
