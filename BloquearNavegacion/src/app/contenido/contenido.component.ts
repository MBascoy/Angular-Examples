import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public bloqueo = false;

  constructor() { }

  ngOnInit(): void {
  }

  activarBloqueo(){
    this.bloqueo = true;
  }

  @HostListener("window:beforeunload")
  BloqueoActualizar(){
    return !this.bloqueo;
  }
}
