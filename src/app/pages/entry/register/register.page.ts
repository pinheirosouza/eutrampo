import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { UploadService } from './../../../shared/services/upload_service/upload.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user_services/user.service';
import { Camera, CameraOptions  } from '@ionic-native/camera/ngx'
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private uploadService: UploadService,
    public camera: Camera,
    private storage: AngularFireStorage,
    private imagePicker: ImagePicker,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  openImagePicker(){
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    console.log("take pic")
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData)
      this.uploadImageToFirebase('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.log('error', err);
    });
    }

    uploadImageToFirebase(image){
      console.log("try up")
      //uploads img to firebase storage
      this.uploadService.uploadImage(image)
      .then( 

      )
      }

      async createRecord()
      {
        //Registrando no Auth
        try {await this.authService.register(this.userRegister);
        } catch(error){
          console.log(error);
        } finally {
          return new Promise(async resolve => {
            try {
              this.userRegister.provided = 0; 
              this.userRegister.hired  = 0;
              this.userRegister.password = "hided";
              await this.userService.create_NewUser(this.userRegister, this.authService.getId());
              console.log(this.userRegister);
            } catch(error) {
                console.log(error);
              };
          }) ;
        }
      }
      
  
  

}
