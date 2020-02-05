import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize, catchError } from 'rxjs/operators';
import{Router} from'@angular/router';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
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

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  caminhoImagem: string;
  private foto_perfil = "../../../assets/img/felipe.png";
  users: any;
  userName: string;
  userAge: number;
  userAddress: string;
  userPhone: string;
  userEmail: string;
  
  constructor(private userService: UserService) { }

  constructor(
    private router : Router,
    private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private astorage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.userService.read_users().subscribe(data => {
 
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          // Age: e.payload.doc.data()['Age'],
          // Address: e.payload.doc.data()['Address'],
          Phone: e.payload.doc.data()['Phone'],
          Email: e.payload.doc.data()['Email'],   
          Gender: e.payload.doc.data()['Gender'],
          // Bio: e.payload.doc.data()['Bio'],
          Password: e.payload.doc.data()['Password'],
        };
      })
      console.log(this.users);
 
    });
  }
   async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Foto de Perfil",
        buttons: [{
                text: 'Carregar da Galeria',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Usar Câmera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Excluir Foto',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            }
            
        ]
    });
    await actionSheet.present();
  }

}
