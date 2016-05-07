import { Component, OnInit } from '@angular/core';
import { Conversazione } from './conversazione.model';
import { ConversazioneComponent } from './conversazione.component';
import { ConversazioniService } from './conversazioni.service';

@Component({
  moduleId: module.id,
  selector: 'conversazioni',
  templateUrl: 'conversazioni.component.html',
  styleUrls: ['conversazioni.component.css'],
  directives: [ConversazioneComponent],
  providers: [ConversazioniService]
})
export class ConversazioniComponent implements OnInit {
  conversazioni: Conversazione[];
  selectedConv: Conversazione;

  constructor(private convService: ConversazioniService) { }

  ngOnInit() {
    this.convService.getConv()
      .subscribe(ris => this.conversazioni = ris);
  }

  onSelect(conv: Conversazione) {
    this.selectedConv = conv;
  }
  onCreaClick(input: String) {
    var newConv = new Conversazione;
    newConv.id = this.conversazioni[this.conversazioni.length - 1].id + 1;
    newConv.nome = input;
    this.conversazioni.push(newConv);
  }
}
