import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cellulare } from '../prodotti';

@Component({
  selector: 'app-alert-prodotti',
  templateUrl: './alert-prodotti.component.html',
  styleUrls: ['./alert-prodotti.component.css'],
})
export class AlertProdottiComponent {
  @Input() cellulare: Cellulare | undefined;
  @Output() avvisami = new EventEmitter();
}
