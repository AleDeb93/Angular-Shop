import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cellulare, cellulari } from '../prodotti';
import { CarrelloService } from '../carrello.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dettagli-prodotto',
  templateUrl: './dettagli-prodotto.component.html',
  styleUrls: ['./dettagli-prodotto.component.css'],
})
export class DettagliProdottoComponent implements OnInit {
  cellulare: Cellulare | undefined;
  constructor(
    private route: ActivatedRoute,
    private carrelloService: CarrelloService
  ) {}

  ngOnInit(): void {
    // prendo i dati del prodotto dalla route
    const parametro = this.route.snapshot.paramMap;
    const idCellulare = Number(parametro.get('cellulareId'));

    // adesso trovo il prodotto corrispondente tramite i parametri definiti ovvero id prodotto
    this.cellulare = cellulari.find(
      (cellulare) => cellulare.id === idCellulare
    );
  }

  // dopo aver importato carrelloService definisco la proprietà aggiungi al carrello
  aggiungiAlCarrello(cellulare: Cellulare){
    this.carrelloService.aggiungiAlCarrello(cellulare);
    Swal.fire({text: `Hai aggiunto ${cellulare.modello} al carrello`, confirmButtonColor: '#0582CA'})
  }
}
