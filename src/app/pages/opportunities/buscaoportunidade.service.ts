import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaoportunidadeService {

  opoURL = 'https://productioneutrampo.herokuapp.com/admin/api/opportunnities';
  public lista_oportunidades: any;
  public lista_oportunidades_pesquisa= new Array<any>();


  constructor(private http:HttpClient) {

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

  filterOportunidades(searchTerm) { 
    return this.lista_oportunidades_pesquisa.filter(oportunidade => {
      return oportunidade.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  } 
}
