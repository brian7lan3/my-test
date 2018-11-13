import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test';
  name = 'kai';
  birthday = '11/31';

  call(money: string) {
    alert("你給了" + money);

  }

}
