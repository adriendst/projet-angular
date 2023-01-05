import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../services/manga/manga.service';

@Component({
  selector: 'app-manga-modif',
  templateUrl: './manga-modif.component.html',
  styleUrls: ['./manga-modif.component.scss']
})
export class MangaModifComponent implements OnInit {
  manga: any = null;
  change:boolean = false;

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

  modif() {
    this.Manga.update(this.manga).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}

