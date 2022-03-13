import { CanDeactivate } from '@angular/router'
import { ContenidoComponent } from './contenido/contenido.component'

export class BloqueoRouting implements CanDeactivate<ContenidoComponent> {
  canDeactivate(component: ContenidoComponent): boolean {
    if(component.bloqueo){
      return confirm('Quieres dejar la página?');
    }
    return true;
  }
}