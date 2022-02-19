import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() dataInput!: string;
  @Output() dataInputChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.dataInputChange.emit(this.dataInput);
  }
}
