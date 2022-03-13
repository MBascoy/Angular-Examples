import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BloqueoRouting } from './bloqueo-routing';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, InicioComponent, ContenidoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
