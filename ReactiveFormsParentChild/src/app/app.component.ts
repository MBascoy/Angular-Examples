import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface formData{
  personal:{
    firstName: string,
    lastName: string
  }
  ,
  contact:{
    email: string
  }
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  addChildForm(name: string, group: FormGroup) {
    this.form.addControl(name, group);
  }

  onSubmit() {
    let data: Partial<formData>;
    data = this.form.value;

    console.log(data.contact?.email)
  }
}
