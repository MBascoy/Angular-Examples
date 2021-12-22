import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup(
      {
        name: new FormControl( "Pepe", [Validators.required, Validators.minLength(4)]),
        edad: new FormControl("0", Validators.pattern("^[0-9]*$"))
    });
  }

  get name() {return this.userForm.get('name')!}
  get edad() {return this.userForm.get('edad')!}

}
