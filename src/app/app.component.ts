import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test';
  name = 'kai';
  birthday = '11/31';
  edit = false;
  text = '編輯';

  call() {
    this.edit = !this.edit;
    if (this.text == '編輯') {
      this.text = '確定';
    } else {
      this.text = '編輯';
    }
  }

}
