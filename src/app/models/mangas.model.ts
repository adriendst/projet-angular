export class Manga {
  id?: string;
  nom: string;
  auteur: string;
  description: string;
  image:string;
  vf: boolean;
  nmbrepisode: number;



  constructor() {
    this.nom = '';
    this.auteur = '';
    this.description = '';
    this.image = '';
    this.vf = true;
    this.nmbrepisode = 0;
  }
}
