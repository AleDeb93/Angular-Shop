import { Component, OnInit } from '@angular/core';
// Gli osservabili forniscono supporto per il passaggio di messaggi tra le parti dell'applicazione
import { Observable } from 'rxjs';
// importo carrelloService
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-spedizione',
  templateUrl: './spedizione.component.html',
  styleUrls: ['./spedizione.component.css'],
})
export class SpedizioneComponent implements OnInit {
  // definisco una proprietà speseSpedizione e la inizializzo all'interno di ngOnInit
  // questa proprietà utilizza il metodo get definito in carrelloService per recuperare i dati
  speseSpedizione!: Observable<{ tipologia: string; prezzo: number }[]>;

  ngOnInit(): void {
    this.speseSpedizione = this.carrelloService.speseSpedizione();
  }

  // inietto il pacchetto con il costruttore
  constructor(private carrelloService: CarrelloService) {}
}
