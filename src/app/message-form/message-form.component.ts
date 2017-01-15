import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Output()
  onCreated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  createNew(newText: string){
    this.onCreated.next(newText);
  }

}
