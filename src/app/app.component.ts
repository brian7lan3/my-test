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

  edit = false;
  text = '編輯';

  dd() {
    this.edit = !this.edit;

    if (this.text === '編輯') {
      this.text = '確認';
    } else {
      this.text = '編輯';
    }

  }

}
