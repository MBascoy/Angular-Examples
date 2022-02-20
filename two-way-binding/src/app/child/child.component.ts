import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  @Input() nameHijo!: string;
  @Output() nameHijoChange = new EventEmitter<string>();

  constructor() {
    this.nameHijoChange.emit(`Hola ${this.nameHijo}`);
  }

  ngOnInit(): void {}
}
