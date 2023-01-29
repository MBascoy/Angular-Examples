import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.css']
})
export class SubFormComponent implements OnInit {

  @Input() skill!: FormGroup;
  @Input() id: number;
  @Output() formEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeSkill(){
    this.formEmitter.emit(this.id);
  }
}
