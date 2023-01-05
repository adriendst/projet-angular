import { Component, OnInit } from '@angular/core';
import { Manga } from '../models/mangas.model';
import { MangaService } from '../services/manga/manga.service';

@Component({
  selector: 'app-manga-new',
  templateUrl: './manga-new.component.html',
  styleUrls: ['./manga-new.component.scss']
})
export class MangaNewComponent implements OnInit {

  public manga!: Manga;

  constructor(
    private Manga: MangaService
  ) { }

  ngOnInit(): void {
    this.manga = new Manga();
  }

  add() {
    this.Manga.saveNewManga(this.manga).subscribe(() => {
      this.manga = new Manga();
    });
  }

}
