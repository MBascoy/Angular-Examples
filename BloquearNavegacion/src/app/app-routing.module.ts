import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloqueoRouting } from './bloqueo-routing';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Contenido', component: ContenidoComponent, canDeactivate: [BloqueoRouting] },
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[BloqueoRouting]
})
export class AppRoutingModule { }
