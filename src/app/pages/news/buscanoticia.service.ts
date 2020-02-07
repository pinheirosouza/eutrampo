import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuscanoticiaService {
  newsURL = 'https://productioneutrampo.herokuapp.com/admin/api/news';
  public lista_noticias: any;
  public lista_noticias_pesquisa= new Array<any>();


  constructor(private http:HttpClient) {

  }
  getNewsApi(){
    this.lista_noticias = this.http.get(this.newsURL);
    console.log("Recebido");
    console.log(this.lista_noticias);
    return this.lista_noticias;
  
  }
  setNoticias(Noticias: Array<any>){
    this.lista_noticias_pesquisa = Noticias;
  }

  filterNoticias(searchTerm) { 
    return this.lista_noticias_pesquisa.filter(noticia => {
      return noticia.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  } 

}
