import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// HttpClientModule registra i provider di cui l'app ha bisogno per utilizzare HttpClient
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { AlertProdottiComponent } from './alert-prodotti/alert-prodotti.component';
import { DettagliProdottoComponent } from './dettagli-prodotto/dettagli-prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { SpedizioneComponent } from './spedizione/spedizione.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProdottiComponent,
    AlertProdottiComponent,
    DettagliProdottoComponent,
    CarrelloComponent,
    SpedizioneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
