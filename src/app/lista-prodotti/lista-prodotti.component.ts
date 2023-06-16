import { Component } from '@angular/core';
import { Cellulare, cellulari } from '../prodotti';
import { CarrelloService } from '../carrello.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css'],
})
export class ListaProdottiComponent {
  cellulari = [...cellulari];

  constructor(private carrelloService: CarrelloService) {}
  aggiungiAlCarrello(cellulare: Cellulare){
    this.carrelloService.aggiungiAlCarrello(cellulare);
    Swal.fire({
      text: `Hai aggiunto ${cellulare.modello} al carrello`,
      confirmButtonColor: '#0582CA',
    });
  }

  // share() {
    // Swal.fire({
    //   text: 'Hai condiviso il prodotto',
    //   confirmButtonColor: '#0582CA',
    // });
  // }

  onAvvisami() {
    Swal.fire({
      text: 'Verrai avvisato quando il prodotto sarà in promozione',
      confirmButtonColor: '#0582CA',
    });
  }
}
