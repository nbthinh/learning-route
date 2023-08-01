import { Component } from '@angular/core';
import { Firstvariable } from './firstvariable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [x: string]: string;
  title = 'routing-app';
  abc_parent = "Sing a song";


  // items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    console.log(newItem)
    // this.items.push(newItem);

  }
  printFixText(text_at: Firstvariable) {
    console.log("text_at Firstvariable = ", text_at)
  }
}
