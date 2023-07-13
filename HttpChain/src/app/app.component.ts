import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from './services/first-service.service';
import { SecondServiceService } from './services/second-service.service';
import { ThirdServiceService } from './services/third-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HttpChain';

  constructor(
    private firstService: FirstServiceService,
    private secondService: SecondServiceService,
    private thirdService: ThirdServiceService
    ){}

  ngOnInit() {
    this.firstService.getInfo()
    .pipe(
      switchMap( data => this.doSecondRequest(data)),
      switchMap( data => this.doThirdRequest(data))
    ).subscribe({ 
      next:data => console.log("Respuesta tercera solicitud: " + data.message),
      error: error => console.log(error.status)
    })

    console.log("Ejecución previa a las solicitudes http")
  }

  doSecondRequest(data: any) {
    console.log("Respuesta primera solicitud: " + data.message)
    return this.secondService.getInfo()
  }

  
  doThirdRequest(data: any) {
    console.log("Respuesta segunda solicitud: " + data.message)
    return this.thirdService.getInfo()
  }
}
