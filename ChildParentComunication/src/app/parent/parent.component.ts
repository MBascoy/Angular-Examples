import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public fullName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  printName(name: string){
    this.fullName = name
  }

}
