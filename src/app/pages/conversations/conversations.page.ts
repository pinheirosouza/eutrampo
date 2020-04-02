import { DevelopingService } from "./../../shared/services/developing/developing.service";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "./../../shared/modals/chat/chat.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat",
  templateUrl: "./conversations.page.html",
  styleUrls: ["./conversations.page.scss"]
})
export class ConversationsPage implements OnInit {
  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    public devService: DevelopingService
  ) {}

  ngOnInit() {}

  // async showModalChat() {
  //   const modal = await this.modalCtrl.create({
  //     component: ChatComponent
  //   });

  //   modal.present();
  // }

  developing() {
    this.devService.developing();
  }
}
