import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  class = {
    css1: true,
    css2: false
  }



  c1() {
    this.class.css1 = true;
    this.class.css2 = false;
  }
  c2() {
    this.class.css1 = false;
    this.class.css2 = true;
  }




}
