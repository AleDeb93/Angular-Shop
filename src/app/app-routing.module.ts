import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { DettagliProdottoComponent } from './dettagli-prodotto/dettagli-prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { SpedizioneComponent } from './spedizione/spedizione.component';

const routes: Routes = [
  {path: '', component: ListaProdottiComponent},
  {path: 'prodotti/:cellulareId', component: DettagliProdottoComponent},
  {path: 'carrello', component: CarrelloComponent},
  {path: 'spedizioni', component: SpedizioneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
