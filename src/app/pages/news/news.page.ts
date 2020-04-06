import { Component, OnInit } from '@angular/core';
import {BuscanoticiaService} from './buscanoticia.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public lista_noticias= new Array<any>();
  public searchTerm: string = "";
  public resp: any;

  constructor(private providerNoticia: BuscanoticiaService) {this.getNews(); }

  ngOnInit() {
    
  }
  getNews(){
    console.log("to aqui");
    this.resp = this.providerNoticia.getNewsApi();

    console.log("Noticias");
    console.log(this.lista_noticias);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_noticias = response;
        console.log(this.lista_noticias);
        this.providerNoticia.setNoticias(this.lista_noticias);
        console.log(this.lista_noticias)
      },
      error=>{
        console.log("Eroo"+error);
      }
    );
   
  }
  setFilteredNoticias() {
    this.lista_noticias = this.providerNoticia.filterNoticias(this.searchTerm);
  }


}
