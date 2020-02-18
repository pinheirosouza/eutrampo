import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscacategoriesService {

  categoryURL = 'https://productioneutrampo.herokuapp.com/admin/api/category/listwithsubcategory';
  workerURL = 'https:/stagingeutrampo.herokuapp.com/admin/api/worker';
  opoURL = 'https://productioneutrampo.herokuapp.com/admin/api/opportunnities';
  newsURL = 'https://productioneutrampo.herokuapp.com/admin/api/news';
 
  public lista_oportunidades: any;
  public lista_oportunidades_pesquisa= new Array<any>();

  public lista_categories: any;
  public lista_categories_pesquisa= new Array<any>();
  
  public lista_workers: any;
  public lista_workers_pesquisa= new Array<any>();

  public lista_noticias: any;
  public lista_noticias_pesquisa= new Array<any>();

  constructor(private http:HttpClient) { }

  getCategoriesApi(){
    this.lista_categories = this.http.get(this.categoryURL);
    console.log("Recebido");
    console.log(this.lista_categories);
    return this.lista_categories;
  
  }

  setCategories(categories: Array<any>){
    this.lista_categories_pesquisa = categories;
  }

  getWorkersApi(){
    this.lista_categories = this.http.get(this.workerURL);
    console.log("Workers");
    console.log(this.lista_categories);
    return this.lista_categories;
  
  }
  setWorkers(workers: Array<any>){
    this.lista_workers_pesquisa = workers;
  }

  getOportunidadesApi(){
    this.lista_oportunidades = this.http.get(this.opoURL);
    console.log("Recebido");
    console.log(this.lista_oportunidades);
    return this.lista_oportunidades;
  
  }
  setOportunidades(oportunidades: Array<any>){
    this.lista_oportunidades_pesquisa = oportunidades;
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

  filterCategories(searchTerm) { 
    return this.lista_workers_pesquisa.filter(worker => {
      return (worker.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (worker.subcategory[0].title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
      || (worker.category[0].title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    });
  }

}
