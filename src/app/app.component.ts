import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  price = "";
  rank: number;

  cpu = [
    { name: "i7-7700", price: "9800", rank: 1 },
    { name: "i5-7600", price: "7000", rank: 2 },
    { name: "i3-7300", price: "5000", rank: 3 },
  ]
}
