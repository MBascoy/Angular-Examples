import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements AfterViewInit {

  constructor() { }

  @ViewChild('someInput') someInput: ElementRef;
  ngAfterViewInit() {
    this.someInput.nativeElement.style = "background-color:lightgreen;";
    this.someInput.nativeElement.innerHTML = "Enlace a google"
    this.someInput.nativeElement.href = "http://google.es"
  }

}

