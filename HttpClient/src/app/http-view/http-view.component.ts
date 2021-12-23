import { Component, OnInit } from '@angular/core';
import { messageRequest, HttpViewService } from './http-view.service';

@Component({
  selector: 'app-http-view',
  templateUrl: './http-view.component.html',
  styleUrls: ['./http-view.component.css']
})
export class HttpViewComponent implements OnInit {

  messageObject: messageRequest[];

  constructor( private httpView: HttpViewService ) {  
  }

  ngOnInit(): void {
    this.httpView.getInfo().subscribe(data => this.messageObject = data)
  }

}
