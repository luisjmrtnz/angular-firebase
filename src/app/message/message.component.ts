import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  messageText: string;

  @Output()
  onUpdated = new EventEmitter<string>();

  @Output()
  onDelete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  update(newText: string){
    this.onUpdated.next(newText);
  }

  delete(){
    this.onDelete.next(true);
  }

}
