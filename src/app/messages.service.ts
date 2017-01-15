import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MessagesService {

  messages: FirebaseListObservable<any>;
  constructor( private af: AngularFire ) {
    this.messages = this.af.database.list('/messages', { preserveSnapshot: true });
    this.messages.subscribe( snapshots => {
      snapshots.forEach( snapshot => {
        console.log(snapshot);
      });
    });
  }

  getAllMessages(): FirebaseListObservable<any>{
    return this.messages;
  }


}
