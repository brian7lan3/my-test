import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = "測試"; //初值

  call(money: any) {
    alert("你給了" + money);
    this.test = "你給了" + money;
  }
}
