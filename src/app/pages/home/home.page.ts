import { ServiceComponent } from './../../shared/modals/service/service.component';
import { Component, OnInit } from "@angular/core";
import { MenuController, ModalController } from "@ionic/angular";
import { BuscacategoriesService } from "./buscacategories.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public lista_categories = new Array<any>();
  public lista_workers = new Array<any>();
  public lista_oportunidades = new Array<any>();
  public lista_noticias = new Array<any>();
  public searchTerm: string = "";
  public resp: any;

  public recent_services;
  public cards;
  public more_services;

  constructor(
    public menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private providerCategories: BuscacategoriesService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getWorkers();
    this.getOpportunities();
    this.getNews();
    this.cards = new Array(5);
  }

  getCategories() {
    console.log("to aqui");
    this.resp = this.providerCategories.getCategoriesApi();

    console.log("categories");
    // console.log(this.lista_categories);
    this.resp.subscribe(
      data => {
        const response = data as any;
        this.lista_categories = response;
        // console.log(this.lista_categories);
        this.providerCategories.setCategories(this.lista_categories);
      },
      error => {
        console.log("Erro " + error);
      }
    );
  }

  getWorkers() {
    console.log("to aqui");
    this.resp = this.providerCategories.getWorkersApi();
    // console.log(this.lista_workers);
    this.resp.subscribe(
      data => {
        const response = data as any;
        this.lista_workers = response;
        console.log("worker novo = ");
        console.log(this.lista_workers);
        this.providerCategories.setWorkers(this.lista_workers);
        console.log("eork = ", this.lista_workers);
      },
      error => {
        console.log("Erro " + error);
      }
    );
  }

  getOpportunities() {
    console.log("to aqui");
    this.resp = this.providerCategories.getOportunidadesApi();
    // console.log(this.lista_oportunidades);
    this.resp.subscribe(
      data => {
        const response = data as any;
        this.lista_oportunidades = response.data;
        // console.log("oportunidade12 = ");
        // console.log(this.lista_oportunidades);
        this.providerCategories.setOportunidades(this.lista_oportunidades);
      },
      error => {
        console.log("Eroo" + error);
      }
    );
  }

  getNews() {
    console.log("to aqui");
    this.resp = this.providerCategories.getNewsApi();

    console.log("Noticias1");
    // console.log(this.lista_noticias);
    this.resp.subscribe(
      data => {
        const response = data as any;
        this.lista_noticias = response;
        console.log(this.lista_noticias);
        this.providerCategories.setNoticias(this.lista_noticias);
      },
      error => {
        console.log("Eroo" + error);
      }
    );
  }

  setFilteredServicos() {
    this.lista_workers = this.providerCategories.filterCategories(
      this.searchTerm
    );
  }

  async showModal(obj_worker) {
    console.log("Worker= " + obj_worker);
    const modal = await this.modalCtrl.create({
      component: ServiceComponent,
      componentProps: { oWorker: obj_worker }
    });

    modal.present();
  }
}
