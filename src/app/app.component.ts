import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = '測試';
  name = 'Lue';
  birthday = '12/2';

  edit = true;

  dd() {

    this.edit = !this.edit;
  }

}
