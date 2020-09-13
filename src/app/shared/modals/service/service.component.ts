import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DevelopingService } from './../../services/developing/developing.service';
import { ChatComponent } from "../chat/chat.component";
import {
  ModalController,
  ActionSheetController,
  PickerController,
  NavParams,
  AlertController
} from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from './../../services/auth/auth.service'
import { ScheduleService } from 'src/app/pages/schedule/schedule.service';


@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"]
})
export class ServiceComponent implements OnInit {
  public Obj_worker;

  

  constructor(
    private modalCtrl: ModalController,
    private pickerCtrl: PickerController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private devService: DevelopingService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    private authService: AuthService,
    private scheduleService: ScheduleService,
    private alertController: AlertController,
  ) {
    this.Obj_worker = navParams.get("oWorker");
    console.log("Nome=" + this.Obj_worker);
  }

  event = {
    by_user_id: this.authService.user._id,
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    allDay: false,
    address: {
      neighborhood: '',
      number: '',
      city: '',
      state: '',
      complement: '',
      cep: '' },
  };


  ngOnInit() {
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Selecione uma opção de contato",
      buttons: [
        {
          text: "Celular",
          icon: "call",
          handler: () => {
            console.log('phone');
          }
        },
        {
          text: "Email",
          icon: "mail-unread",
          handler: () => {
            console.log('mail');
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  openChat() {}

  openEmail() {
    let email = {
      to: this.Obj_worker.user[0].email,
      subject: 'Solicitação de serviço - EuTrampo',
      isHtml: true
    }
    
    this.emailComposer.open(email);
  }

  openCall(){
      this.callNumber.callNumber(this.Obj_worker.user[0].phone, true)
        .then(res => console.log('Realizando chamada!', res))
        .catch(err => console.log('Erro ao realizar chamada.', err));
  }

  developing() {
    this.devService.developing();
  }

  openPicker(){}
  
  addNewEvent(){
    this.scheduleService.setTarefas(this.event).then((res)=>{
      console.log(res)
      console.log("funcionou")
    })
    .catch((err)=>{
      console.log(err)
      console.log("não funcionou")
    });

    this.confirmSchedule()
    

      this.event = {
        by_user_id: '',
        title: '',
        description: '',
        startTime: '', 
        endTime: '',
        allDay: false,
        address:  {
          neighborhood:'' ,
          number: '',
          city: '',
          state: '',
          complement:'' ,
          cep:'' },
      };
      

  }
  async confirmSchedule() {
    const alert = await this.alertController.create({
      header: 'Serviço adicionado em sua agenda',
      message: 'Aguarde confirmação do prestador',
      buttons: [
        {
          text: 'OK!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }]});
        await alert.present();
      }
    
}