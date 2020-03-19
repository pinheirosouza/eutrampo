import { UploadService } from "./../../../shared/services/upload/upload.service";
import { AuthService } from "./../../../shared/services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

import { User } from "../../../shared/interfaces/user";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  userRegister: User = {};
  public image = "" ;
  
  public loadingImg: boolean = false;

  constructor(
    private authService: AuthService,
    public toastCtrl: ToastController,
    public camera: Camera,
    public upService: UploadService
  ) {}

  ngOnInit() {
    console.log(this.userRegister);
  }

  register() {
    this.userRegister.image = this.image;
    this.authService.register(this.userRegister).subscribe(res => {
      // Call Login to automatically login the new user
      this.authService.login(this.userRegister).subscribe();
    });
  }

  getImage(mode) {
    console.log(mode);
    // return mode;

    var sourceType = mode;
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      targetWidth: 800
    };
    this.camera.getPicture(options).then(
      async imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        let toast = await this.toastCtrl.create({
          message: "Enviando mídia",
          position: "top"
        });
        this.loadingImg = true;
        toast.present();
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.upService.uplodFile(base64Image).then(response => {
          this.loadingImg = false;
          toast.dismiss();
          console.log(response);
          let res: any = response;
          console.log(res.url)
          if (res.success == true){
            this.image = res.url;
          } 
          // this.getAuthentication(res.url);
          // this.payment.media.push(res.url)
          // if(res.success){
          //   this.events.publish("imageUploaded",res.url,page);
          // }

          // console.log('oi')
          // this.viewCtrl.dismiss();
        });
      },
      err => {
        // Handle error
      }
    );
  }
}
