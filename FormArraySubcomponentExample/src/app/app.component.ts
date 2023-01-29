import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  skillsForm: FormGroup = new FormGroup({});

  lista: number[] = [1,2,3,4];

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: ['', [Validators.required]],
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(numero: number): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]],
      id: numero
    });
  }

  addSkills(numero: number) {
    this.skills.push(this.newSkill(numero));
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.controls['skills'].value[0].skill);
    console.log(this.skillsForm.value);
  }
}
