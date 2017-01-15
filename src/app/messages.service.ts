import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MessagesService {

  messages: FirebaseListObservable<any>;
  constructor( private af: AngularFire ) {
    this.messages = this.af.database.list('/messages');
  }

  getAllMessages(): FirebaseListObservable<any>{
    return this.messages;
  }

  updateMessage($key:string, newText: string){
    this.messages.update($key, {text: newText})
      .then( _ => console.log("Updated succesfully"))
      .catch( err => console.log(err));
  }

  addMessage(newText: string){
    this.messages.push({ text: newText })
      .then( _ => console.log(`${_} has been added succesfullu`))
      .catch( err => console.log(err));
  }


}
