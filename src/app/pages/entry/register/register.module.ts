import { UploadService } from './../../../shared/services/upload/upload.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { IonicModule } from "@ionic/angular";

import { RegisterPageRoutingModule } from "./register-routing.module";

import { RegisterPage } from "./register.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RegisterPageRoutingModule],
  providers: [
    UploadService
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
