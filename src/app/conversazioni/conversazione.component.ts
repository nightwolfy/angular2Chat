import { Component, OnInit, Input } from '@angular/core';
import {Conversazione} from './conversazione.model';
import {Messaggio} from './messaggi/messaggio.model';
import { MessaggiService } from './messaggi/messaggio.service';
@Component({
    moduleId: module.id,
    selector: 'conversazione',
    templateUrl: 'conversazione.component.html',
  providers: [MessaggiService]
})
export class ConversazioneComponent implements OnInit {
    @Input() conv: Conversazione;
   constructor(private convService: MessaggiService) { }

  ngOnInit() {
     this.conv.messaggi = new Messaggio[0];
    this.convService.getMsg()
      .subscribe(ris => this.conv.messaggi = ris);
  }

}