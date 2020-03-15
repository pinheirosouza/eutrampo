import { ServiceModalPage } from "./../../shared/modals/service-modal/service-modal.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { StarRatingModule } from "ionic4-star-rating";


@NgModule({
  imports: [
    FormsModule,
    StarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    // ModalsModule,
    
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ServiceModalPage],
  entryComponents: [ServiceModalPage]
  
})
export class HomePageModule {}
