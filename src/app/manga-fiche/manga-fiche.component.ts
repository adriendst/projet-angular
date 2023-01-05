import { Component, OnInit } from '@angular/core';
import {MangaService} from "../services/manga/manga.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manga-fiche',
  templateUrl: './manga-fiche.component.html',
  styleUrls: ['./manga-fiche.component.scss']
})
export class MangaFicheComponent implements OnInit {
  manga: any = null;

  constructor(
    private Manga: MangaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Manga.get(id).subscribe((value: any) => {
      console.log(value)
      this.manga = value;
    });
  }

}
