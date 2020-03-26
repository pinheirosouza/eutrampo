import { UpdateWorkerComponent } from './../../../../shared/modals/update-worker/update-worker.component';
import { ResponseAlertService } from "./../../../../shared/services/response-alert/response-alert.service";
import { WorkerService } from "./../../../../shared/services/worker/worker.service";
import { AuthService } from "./../../../../shared/services/auth/auth.service";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { AddWorkerComponent } from "src/app/shared/modals/add-worker/add-worker.component";

@Component({
  selector: "app-my-services-tab",
  templateUrl: "./my-services-tab.page.html",
  styleUrls: ["./my-services-tab.page.scss"]
})
export class MyServicesTabPage implements OnInit {
  
  public workersList: any = [];

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    public workerService: WorkerService,
    public responseService: ResponseAlertService
  ) {
    this.userWorkersList();
  }

  ngOnInit() {}

  userWorkersList() {
    this.workerService.getUserWorkers(this.authService.user._id).subscribe(
      res => {
        this.workersList = res;
        console.log(res);
      },
      err => {
        this.responseService.response("Sem serviços para carregar");
      }
    );
  }

  async addWorkerModal() {
    const modal = await this.modalCtrl.create({
      component: AddWorkerComponent
    });
    modal.present();
  }

  async updateWorkerModal(worker) {
    const modal = await this.modalCtrl.create({
      component: UpdateWorkerComponent,
      componentProps: { workerData : worker }
    });
    modal.present();
  } 


}
