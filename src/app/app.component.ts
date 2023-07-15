import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: "./app.components.html",
  styles: []
})
export class AppComponent {

  title = 'ng-testtechnique';
  ngOnInit():void {
    console.log("ngOnInit");
  }
}
