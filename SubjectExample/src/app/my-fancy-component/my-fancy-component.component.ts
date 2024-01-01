import { Component, OnInit } from '@angular/core';
import { MySubjectService } from '../my-subject.service';

@Component({
  selector: 'app-my-fancy-component',
  templateUrl: './my-fancy-component.component.html',
  styleUrls: ['./my-fancy-component.component.css']
})
export class MyFancyComponentComponent implements OnInit {

  messageDisplay: string = ""
  
  constructor(
    private mySubjectService: MySubjectService
  )
  {}

  ngOnInit(): void {
    this.mySubjectService.messages$.subscribe((message) => this.messageDisplay = message)
  }
}
