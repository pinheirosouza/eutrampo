import { Component, OnInit } from '@angular/core';
import {BuscaoportunidadeService} from './buscaoportunidade.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
})
export class OpportunitiesPage implements OnInit {

  public lista_oportunidades= new Array<any>();
  public searchTerm: string = "";
  public resp: any;

  constructor(private providerOportunidade: BuscaoportunidadeService) { }

  ngOnInit() {
    this.getOpportunities();
  }
  getOpportunities(){
    console.log("to aqui");
    this.resp = this.providerOportunidade.getOportunidadesApi();

    console.log(this.lista_oportunidades);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_oportunidades = response.data;
        console.log("oportunidade12 = ");
        console.log(this.lista_oportunidades);
        this.providerOportunidade.setOportunidades(this.lista_oportunidades);
      },
      error=>{
        console.log("Eroo"+error);
      }
    );
   
  }
  setFilteredOportunidades() {
    this.lista_oportunidades = this.providerOportunidade.filterOportunidades(this.searchTerm);
  }

}
