import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  class = "css1 css2";



  c1() {
    this.css = this.css1;
  }

  c2() {
    this.css = this.css2;
  }


}
