import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaModifComponent } from './manga-modif/manga-modif.component';
import { MangaNewComponent } from './manga-new/manga-new.component';
import { HomeComponent } from './home/home.component';
import {MangaFicheComponent} from "./manga-fiche/manga-fiche.component";

const routes: Routes = [
  {
    path: 'mangas',
    component: MangaListComponent
  }, {
    path: 'new',
    component: MangaNewComponent
  }, {
    path: 'modif/:id',
    component: MangaModifComponent
  }, {
    path: '',
    component: HomeComponent
  },
  {
    path: 'manga/:id',
    component: MangaFicheComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
