import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.css']
})
export class EventInputComponent implements OnInit {

  constructor() { }

  public name:string = "Eventos recibidos:";
  public numberOfInputs: number = 0;

  ngOnInit(): void {
  }

  increaseInput(){
    this.numberOfInputs++;
  }

}
