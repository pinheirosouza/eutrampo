import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { EvaluationService } from "src/app/shared/services/evaluation/evaluation.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})


export class RatingComponent implements OnInit {

    constructor(
        private modalCtrl: ModalController,
        public evaluation: EvaluationService
    ){
    }
    userId='5f0f58aa51ccd50024584582'
    totalRating;
    ngOnInit(){
      this.evaluation.getEvaluationById(this.userId)
    }
    

    modalClose() {
        this.modalCtrl.dismiss();
      }

    logRatingChange(event){
      this.totalRating = event
    }

    sendEvaluation(id){
      this.totalRating = this.totalRating/3
      this.evaluation.setNewEvaluationById(id,this.totalRating)
    }
}