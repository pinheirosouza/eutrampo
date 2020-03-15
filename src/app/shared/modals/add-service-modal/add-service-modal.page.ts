import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddServiceModalService } from './add-service-modal.service';
import {Worker} from './worker';

@Component({
  selector: 'app-add-service-modal',
  templateUrl: './add-service-modal.page.html',
  styleUrls: ['./add-service-modal.page.scss'],
})
export class AddServiceModalPage implements OnInit {
  encapsulation:ViewEncapsulation
  allServicesList:any=[]
  subList:any=[]
  selected:any
  subselected = ''
  worker: Worker = {}
  selectedId:any
  subselectedId:any
  
  constructor(private modalCtrl:ModalController,private service:AddServiceModalService) { }
  
  ngOnInit() {
    this.service.getServices().then((res)=>{
      console.log(res)
      this.allServicesList=res
    }).catch(()=>{
      console.log("erro")
    }).finally(()=>{
      console.log(this.allServicesList)
    })
    
  }


  nextStep(res){

    var index = this.allServicesList.findIndex(job => job.title === res);
    this.subList = this.allServicesList[index].subcategory
    console.log(this.subList)

  }

  submit(res){
    var index = this.subList.findIndex(job => job.title === res);
    this.selectedId = this.subList[index].category_id
    this.worker.category_id = this.selectedId
    this.subselectedId = this.subList[index]._id
    this.worker.sub_category_id = this.subselectedId  
    console.log(this.worker)

  }

  clear(){
    this.subselected=''
    this.subselectedId=''
  }

  modalClose(){
    this.modalCtrl.dismiss();
  }

}
