import { ServiceModalPage } from './../../shared/modals/service-modal/service-modal.page';
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import {BuscacategoriesService} from './buscacategories.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public lista_categories= new Array<any>();
  public lista_workers= new Array<any>();
  public lista_oportunidades= new Array<any>();
  public lista_noticias= new Array<any>();

  public searchTerm: string = "";
  public resp: any;

  public recent_services;
  public cards;
  public more_services;

  constructor(
    public menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private providerCategories: BuscacategoriesService
  )  
  {
    this.recent_services = [
      { name:'Pedro Souza', 
        pic:"../../../assets/img/pedro.jpg", 
        servicetype:'Pedreiro', 
        provided: 145, 
        price: 45, 
        redirectTo: "#"},

      { name:'Fernando Toledo', 
        pic:"../../../assets/img/fernando.jpeg", 
        servicetype:'Costureiro', 
        provided: 184, 
        price: 20, 
        redirectTo: "#"},

      { name:'Felipe Freitas', 
        pic:"../../../assets/img/felipe.png", 
        servicetype:'Professor Particular', 
        provided: 82, 
        price: 60, 
        redirectTo: "#"},
    ]
  }

  ngOnInit() {
    this.getCategories();
    this.getWorkers();
    this.getOpportunities();
    this.getNews();
    this.cards = new Array(5);
  }

  getCategories(){
    console.log("to aqui");
    this.resp = this.providerCategories.getCategoriesApi();

    console.log("categories");
    // console.log(this.lista_categories);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_categories = response;
        // console.log(this.lista_categories);
        this.providerCategories.setCategories(this.lista_categories);
      },
      error=>{
        console.log("Eroo"+error);
      }
    );
  }

  getWorkers(){
    console.log("to aqui");
    this.resp = this.providerCategories.getWorkersApi();
    // console.log(this.lista_workers);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_workers = response;
        console.log("worker novo = ");
        console.log(this.lista_workers);
        this.providerCategories.setWorkers(this.lista_workers);
      },
      error=>{
        console.log("Eroo"+error);
      }
    );  
  }

  getOpportunities(){
    console.log("to aqui");
    this.resp = this.providerCategories.getOportunidadesApi();
    // console.log(this.lista_oportunidades);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_oportunidades = response.data;
        // console.log("oportunidade12 = ");
        // console.log(this.lista_oportunidades);
        this.providerCategories.setOportunidades(this.lista_oportunidades);
      },
      error=>{
        console.log("Eroo"+error);
      }
    );
  }

  getNews(){
    console.log("to aqui");
    this.resp = this.providerCategories.getNewsApi();

    console.log("Noticias1");
    // console.log(this.lista_noticias);
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        this.lista_noticias = response;
        console.log(this.lista_noticias);
        this.providerCategories.setNoticias(this.lista_noticias);
      },
      error=>{
        console.log("Eroo"+error);
      }
    );
   
  }

  setFilteredServicos() {
    this.lista_workers = this.providerCategories.filterCategories(this.searchTerm);
    
  }


  async showModal(obj_worker){
    console.log("Worker= "+obj_worker)
    const modal = await this.modalCtrl.create(
      
      {
      component:ServiceModalPage,
      componentProps:{oWorker: obj_worker}
    }).then(modal=>{
      modal.present();
    })
      
  }


}
