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
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {};
  private image;
  private tempImg;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private uploadService: UploadService,
    public camera: Camera,
    private storage: AngularFireStorage,
    private imagePicker: ImagePicker,
    private toastCtrl: ToastController,
    private DomSanitizer: DomSanitizer
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
      this.image = imageData;
      console.log(this.image);
      
    }, (err) => {
      console.log('error', err);
    });
  }

  uploadImageToFirebase(image){
    console.log("try up")
    //uploads img to firebase storage
    return this.uploadService.uploadImage(image, this.authService.getId());
    
  }

  async createRecord()
  {
    //Registrando no Auth
    try {await this.authService.register(this.userRegister);
    } catch(error){
      console.log(error);
    } finally {
      return new Promise( resolve => {
        try {
          this.uploadImageToFirebase('data:image/jpeg;base64,' + this.image).then( (img) => {
            console.log("IMAGEM: ", img);
            this.userRegister.provided = 0; 
            this.userRegister.hired  = 0;
            this.userRegister.password = "hided";
            this.userRegister.img = img;
            this.userService.create_NewUser(this.userRegister, this.authService.getId());
            console.log(this.userRegister);
          }).catch(async (err) => {
            console.log("OCORREU UM ERRO");
          })
        } catch(err){
          console.log(err)
        } finally {
        } 
      }) ;
    }
  }
      
  
  

}
