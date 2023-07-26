import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent {
  @Output() formReady = new EventEmitter<FormGroup>();

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formReady.emit(this.form);
  }
}
