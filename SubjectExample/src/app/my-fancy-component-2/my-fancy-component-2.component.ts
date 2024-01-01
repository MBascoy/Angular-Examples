import { Component } from '@angular/core';
import { MySubjectService } from '../my-subject.service';

@Component({
  selector: 'app-my-fancy-component-2',
  templateUrl: './my-fancy-component-2.component.html',
  styleUrls: ['./my-fancy-component-2.component.css']
})
export class MyFancyComponent2Component {

  constructor(
    private mySubjectService: MySubjectService
  )
  {}

  sendMessage(){
    this.mySubjectService.sendMessage("holas")
  }

}
