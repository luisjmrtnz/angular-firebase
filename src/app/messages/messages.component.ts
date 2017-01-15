import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages$: FirebaseListObservable<any>;

  constructor( private ms: MessagesService ) { }

  ngOnInit() {
    this.messages$ = this.ms.getAllMessages();
  }

  onUpdated(newText: string, $key: string){
    this.ms.updateMessage($key, newText);
  }

  onCreated(newText:string){
    this.ms.addMessage(newText);
  }

}
