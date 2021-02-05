import { JobService } from './../../../shared/services/job/job.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RatingComponent } from 'src/app/shared/modals/rating/rating.component';


@Component({
  selector: 'app-hired',
  templateUrl: './hired.page.html',
  styleUrls: ['./hired.page.scss'],
})
export class HiredPage implements OnInit {
  
  public hiredList: any;
  private customForm: FormGroup;
 
  constructor(jobService: JobService, private modalCtrl: ModalController){}

  ngOnInit(){
  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

  async avaliar(){
    const modal = await this.modalCtrl.create({
      component: RatingComponent,
      //componentProps: { workerData : worker }
    });
    modal.present();
  }
}



