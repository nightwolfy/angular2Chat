import { Component, OnInit, Input } from '@angular/core';
import {Conversazione} from './conversazione.model';
@Component({
    moduleId: module.id,
    selector: 'conversazione',
    templateUrl: 'conversazione.component.html'
})
export class ConversazioneComponent implements OnInit {
    @Input() conv: Conversazione;
    constructor() { }

    ngOnInit() { }

}