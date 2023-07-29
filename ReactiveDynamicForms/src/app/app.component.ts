import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveDynamicForms';

  namesForm: FormGroup = this.formBuilder.group({
    names: this.formBuilder.array([new FormControl("")])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  get names() {
    return this.namesForm.get('names') as FormArray;
  }

  addNames() {
    this.names.push(new FormControl('', [Validators.required]));
  }

  deleteName(index: number) {
    this.names.removeAt(index);
  }

  onSubmit(){
    console.log(this.namesForm.value)
  }
}
