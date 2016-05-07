import { Component } from '@angular/core';
import { ConversazioniComponent } from './conversazioni/conversazioni.component';
@Component({
  moduleId: module.id,
  selector: 'angular-chat-app',
  templateUrl: 'angular-chat.component.html',
  styleUrls: ['angular-chat.component.css'],
    directives: [ConversazioniComponent]
})
export class AngularChatAppComponent {
  title = 'angular-chat works!';
}
