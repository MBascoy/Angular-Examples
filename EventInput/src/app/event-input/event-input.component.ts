import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.css']
})
export class EventInputComponent implements OnInit {

  constructor() { }

  name:string = "Pulsa Aqui";

  ngOnInit(): void {
  }

  changeName(){
    this.name = "Mario";
  }

}
