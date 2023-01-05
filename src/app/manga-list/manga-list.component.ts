import { Component, OnInit} from '@angular/core';
import { MangaService } from '../services/manga/manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent implements OnInit {
  mangas!:any;
  constructor(
    private Manga: MangaService
  ) {}

  ngOnInit(): void {
    this.Manga.getAllMangas().subscribe((data: any) => {
      this.mangas = data;
    });
  }
}
