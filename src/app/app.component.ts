import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test';
  message = "沒事";

  tem() {
    alert("被按了!");
  }

  over() {
    this.message = "進來了";
  }

  leave() {
    this.message = "離開了!";
  }
}
