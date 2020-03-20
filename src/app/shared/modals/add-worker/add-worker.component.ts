import { ResponseAlertService } from './../../services/response-alert/response-alert.service';
import { UploadService } from './../../services/upload/upload.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from './../../services/auth/auth.service';
import { SearchCategoriesService } from "./../../services/search-categories/search-categories.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { WorkerService } from "../../services/worker/worker.service";
import { Worker } from "../../interfaces/worker";

@Component({
  selector: "app-add-service-modal",
  templateUrl: "./add-worker.component.html",
  styleUrls: ["./add-worker.component.scss"]
})
export class AddWorkerComponent implements OnInit {
  public categoriesList: any;
  public subCategoriesList: any;
  public selectedCategory = null;
  public selectedSubcategory = null;

  public worker: Worker = {};

  public image = "" ;
  
  public loadingImg: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private addWorkerService: WorkerService,
    private searchCategoriesService: SearchCategoriesService,
    private authService: AuthService,
    public toastCtrl: ToastController,
    public camera: Camera,
    public upService: UploadService,
    public responseService: ResponseAlertService
  ) {
    this.listCategories();
  }

  ngOnInit() {}

  listCategories() {
    this.searchCategoriesService.getCategories().subscribe(res => {
      console.log(res);
      this.categoriesList = res;
    });
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

  submit() {
    try{
      this.worker.user_id = this.authService.user._id;
      this.worker.category_id = this.categoriesList[this.selectedCategory]._id;
      this.worker.sub_category_id = this.categoriesList[this.selectedCategory].subcategory[this.selectedSubcategory]._id;
      console.log(this.worker);
      this.addWorkerService.addWorker(this.worker).subscribe(
        res => this.responseService.response("Seu serviço foi cadastrado", "Seu serviço estará no ar em instantes"),
        err => this.responseService.response("Cadastro Inválido", "Repita o processo")
      )
      this.modalClose()
    } catch {
      this.responseService.response("Cadastro Inválido", "Repita o processo")
    }
    
  }
}
