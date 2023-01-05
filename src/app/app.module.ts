import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { FormsModule } from "@angular/forms";

import { MangaService } from "./services/manga/manga.service";
import { HomeComponent } from './home/home.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaModifComponent } from './manga-modif/manga-modif.component';
import { MangaNewComponent } from './manga-new/manga-new.component';
import { MangaFicheComponent } from './manga-fiche/manga-fiche.component';


import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    HomeComponent,
    MangaListComponent,
    MangaModifComponent,
    MangaNewComponent,
    MangaFicheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    MangaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
