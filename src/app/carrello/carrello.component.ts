import { Component } from '@angular/core';
// FormBuilder fornisce metodi per la generazione di form
import { FormBuilder } from '@angular/forms';
import { CarrelloService } from '../carrello.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent {
  articoli = this.carrelloService.vediCarrello();

  // creo la proprietà su cui imposterò il modulo di raccolta dati
  checkout = this.formBuilder.group({
    nome: '',
    indirizzo: '',
  });

  constructor(
    private carrelloService: CarrelloService,
    private formBuilder: FormBuilder
  ) {}

  // inviaOrdine mi permetterà di pulire il carrello e di mandare un messaggio all'utente sull'ordine appena inviato
  inviaOrdine(): void {
    this.articoli = this.carrelloService.svuotaCarrello();
    console.warn('Il tuo ordine è stato inviato', this.checkout.value);
    Swal.fire({
      text: `L'ordine contenente: ${this.checkout.value} è stato inviato`,
      confirmButtonColor: '#0582CA',
    })
    this.checkout.reset()
  }
}
