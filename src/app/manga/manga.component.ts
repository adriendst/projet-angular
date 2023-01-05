import { Component, OnInit, Input } from '@angular/core';
import { MangaService } from '../services/manga/manga.service';
import {interval} from "rxjs";

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {
  @Input() mangaName?: string;
  @Input() mangaVF?: boolean;
  @Input() id?: string ;

  time!:number;


  constructor(
    private Manga: MangaService,

  ) { }

  ngOnInit(): void {
  }

  changeColor() {
    return this.mangaVF ? 'purple' : 'red';
  }

  suppr(){
    this.Manga.delete(this.id);
  }


  //initialise un timer pour chaque manga que vous avez aimé
  like(){
    // @ts-ignore
    let idelement = event.srcElement.id;
    let button = document.getElementById(idelement);

    // @ts-ignore
    let spanlike = button.nextSibling;

    // @ts-ignore
    if(spanlike.style.display === "none"){

      const counter = interval(1000)
      counter.subscribe(
        (value) =>{
          this.time = value;
        },
        (error) => {
          console.log('Error : ' + error);
        },
        () => {
          console.log("Observable complete !")
        }
      )

      // @ts-ignore
      spanlike.style.display = "block";

    }
  }
}
