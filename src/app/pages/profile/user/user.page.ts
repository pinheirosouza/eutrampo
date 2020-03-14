import { Observable } from 'rxjs';
import { AuthService } from './../../../auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user_services/user.service';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
 
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  images = [];
  private imagteste;

  public user: Observable<User>;
  public userUpdate: User = {};

  constructor(
    private userService: UserService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    // console.log(this.user)
    // this.user = this.userService.readUser(this.authService.getId()).valueChanges();
    // console.log(this.authService.getId());
    // console.log(this.user)
  }
  //  async selectImage() {
  //   const actionSheet = await this.actionSheetController.create({
  //       header: "Foto de Perfil",
  //       buttons: [{
  //               text: 'Carregar da Galeria',
  //               handler: () => {
  //                   this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //               }
  //           },
  //           {
  //               text: 'Usar Câmera',
  //               handler: () => {
  //                   this.takePicture(this.camera.PictureSourceType.CAMERA);
  //               }
  //           },
  //           {
  //               text: 'Excluir Foto',
  //               handler: () => {
  //                   this.takePicture(this.camera.PictureSourceType.CAMERA);
  //               }
  //           }
            
  //       ]
  //   });
  //   await actionSheet.present();
  // }

  updateRecord(){
    let user = this.userUpdate;
    this.userService.updateUser(user);
  }

  // deleteRecord() {
  //   this.authService.deleteCurrentUser()
  //   this.userService.deleteUser(this.authService.getId());
  // }

}
