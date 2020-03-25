import { ResponseAlertService } from "./../../services/response-alert/response-alert.service";
import { UploadService } from "./../../services/upload/upload.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AuthService } from "./../../services/auth/auth.service";
import { SearchCategoriesService } from "./../../services/search-categories/search-categories.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController, ToastController, NavParams } from "@ionic/angular";
import { WorkerService } from "../../services/worker/worker.service";
import { Worker } from "../../interfaces/worker";

@Component({
  selector: "app-update-worker-modal",
  templateUrl: "./update-worker.component.html",
  styleUrls: ["./update-worker.component.scss"]
})
export class UpdateWorkerComponent implements OnInit {
  public id;
  public worker;

  public categoriesList: any;
  public subCategoriesList: any;
  public selectedCategory = null;
  public selectedSubcategory = null;

  public updateWorker: Worker = {};

  public image = "";

  public loadingImg: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private workerService: WorkerService,
    private searchCategoriesService: SearchCategoriesService,
    private authService: AuthService,
    public toastCtrl: ToastController,
    public camera: Camera,
    public upService: UploadService,
    public responseService: ResponseAlertService,
    public navParams: NavParams
  ) {
    this.id = this.navParams.get("id")
    this.listCategories();
    this.getWorker();
  }

  ngOnInit() {}

  getWorker(){
    console.log(this.id)
    this.workerService.getWorker(this.id).subscribe(
      res => {
        this.worker = res[0];
      },
      err => console.log(err)
    )
  }

  listCategories() {
    this.searchCategoriesService.getCategories().subscribe(res => {
      console.log(res);
      this.categoriesList = res;
    });
  }

  submit() {
    console.log(this.updateWorker);
    try {
      this.updateWorker.user_id = this.authService.user._id;
      this.updateWorker.category_id = this.categoriesList[
        this.selectedCategory
      ]._id;
      this.updateWorker.sub_category_id = this.categoriesList[
        this.selectedCategory
      ].subcategory[this.selectedSubcategory]._id;
      console.log(this.updateWorker);
      this.workerService.updateWorker(this.id,this.updateWorker).subscribe(
        res =>
          this.responseService.response(
            "Seu serviço foi cadastrado",
            "Seu serviço estará no ar em instantes"
          ),
        err =>
          this.responseService.response(
            "Cadastro Inválido",
            "Repita o processo"
          )
      );
      this.modalClose();
    } catch {
      this.responseService.response("Cadastro Inválido", "Repita o processo");
    }
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

  clearCategory() {
    console.log("clear");
    this.selectedCategory = null;
  }

  clearSubcategory() {
    console.log("sub clear");
    this.selectedSubcategory = null;
  }
}
