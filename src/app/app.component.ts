import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fun = [
    { name: "台灣", persent: "5%", rank: 0 },
    { name: "日本", persent: "87%", rank: 5 },
    { name: "韓國", persent: "33%", rank: 3 }
  ];
}
