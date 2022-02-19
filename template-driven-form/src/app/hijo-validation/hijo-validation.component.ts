import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-validation',
  templateUrl: './hijo-validation.component.html',
  styleUrls: ['./hijo-validation.component.css']
})
export class HijoValidationComponent implements OnInit {

  @Input() dataInputValidation!: string;
  @Output() dataInputValidationChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  dataEmitter(){
    this.dataInputValidationChange.emit(this.dataInputValidation);
  }
}
