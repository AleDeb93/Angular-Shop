import { Injectable } from '@angular/core';
import { Cellulare } from './prodotti';
// importo HttpClient per recuperare gli API da risorse esterne (in questo le spedizioni)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  // importo cellulare da prodotti.ts nel service e definisco la proprietà items per memorizzare un array
  articoli: Cellulare[] = [];

  // inserisco HttpClient dentro il costruttore della classe
  constructor(private http: HttpClient) {}

  // definisco i metodi con cui aggiungere articoli, restituire gli articoli e cancellare gli articoli dal carrello
  aggiungiAlCarrello(articolo: Cellulare) {
    this.articoli.push(articolo);
  }
  vediCarrello() {
    return this.articoli;
  }
  svuotaCarrello() {
    this.articoli = [];
    return this.articoli;
  }

  // ottengo le spese di spedizione da shipping.json
  speseSpedizione() {
    return this.http.get<{ tipologia: string; prezzo: number }[]>(
      '../assets/shipping.json'
    );
  }
}
