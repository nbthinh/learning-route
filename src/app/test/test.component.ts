import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Firstvariable } from '../firstvariable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() abc = '123'
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() second_function = new EventEmitter<Firstvariable>();
  text_list = []
  input_text: "ABC";
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  addNewItemSecond(){
    this.second_function.emit({
      text_at: 'ABC',
      text_at_2: 15
    })
  }


  handle_add_text(text: string){
    this.text_list.push(text)
  }
}
