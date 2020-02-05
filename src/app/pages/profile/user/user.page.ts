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

  constructor(
    private router : Router,
    private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private astorage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    // this.plt.ready().then(() => {
    //   this.loadProfileImage();
    // });
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










  // upload(event) {    medium
  //   this.complete = false;
  //   const file = event.target.files[0]
  //   const path = `imagens/${file.name}`;
  //   const fileRef = this.storage.ref(path.replace(/\s/g, ''));
  //   this.task = this.storage.upload(path.replace(/\s/g, ''), file)
  //   this.task.then(up => {
  //     fileRef.getDownloadURL().subscribe(url => {
  //       this.complete = true
  //       this.caminhoImagem = url

  //     })
  //   })
  //   this.uploadPercent = this.task.percentageChanges();
  // }

  // loadProfileImage() {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //     if (images) {
  //       let arr = JSON.parse(images);
  //       this.images = [];
  //       for (let img of arr) {
  //         let filePath = this.file.dataDirectory + img;
  //         let resPath = this.pathForImage(filePath);
  //         this.images.push({ name: img, path: resPath, filePath: filePath });
  //       }
  //     }
  //   });
  // }
  
  // pathForImage(img) {
  //   if (img === null) {
  //     return '';
  //   } else {
  //     let converted = this.webview.convertFileSrc(img);
  //     return converted;
  //   }
  // }

  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

 
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: sourceType, //De onde quero pegar as fotos
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options) //Traz o caminho do arquivo
    .then(imagePath => {
                      //carregar foto galeria
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) { //carregar foto galeria
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {

                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    console.log("Correct= "+correctPath); console.log("Current= "+currentName); 
                    console.log("FilePath= "+filePath); console.log("ImagePath= "+imagePath);
                });
        }             //Abrir câmera 
        else { 
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            console.log("Correct= "+correctPath); console.log("Current= "+currentName); 
            console.log("ImagePath= "+imagePath);          
        }

    });
        

 
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }
 
  copyFileToLocalDir(namePath, currentName, newFileName) {

    this.file.copyFile(namePath, currentName, newFileName,this.file.dataDirectory).then(success => {
        this.readFile(namePath, currentName, newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
  }
 
  // updateStoredImages(name) {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //       let arr = JSON.parse(images);
  //       console.log("Imagens= "+images); 
  //       if (!arr) {
  //           let newImages = [name];
  //           this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
  //       } else {
  //           arr.push(name);
  //           this.storage.set(STORAGE_KEY, JSON.stringify(arr));
  //       }
        

  //       let filePath = this.file.dataDirectory + name;
  //       let resPath = this.pathForImage(filePath);
  //       console.log("resPath= "+resPath);
  //       console.log("File= "+filePath); 


 
  //       let newEntry = {
  //           name: name,
  //           path: resPath,
  //           filePath: filePath
  //       };
 
  //       this.images = [newEntry, ...this.images];
  //       this.ref.detectChanges(); // trigger change detection cycle
  //   });
  // }
  

  // deleteImage(imgEntry, position) {
  //   this.images.splice(position, 1);
 
  //   this.storage.get(STORAGE_KEY).then(images => {
  //       let arr = JSON.parse(images);
  //       let filtered = arr.filter(name => name != imgEntry.name);
  //       this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
  //       var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
 
  //       this.file.removeFile(correctPath, imgEntry.name).then(res => {
  //           this.presentToast('File removed.');
  //       });
  //   });
  // }

  // startUpload(imgEntry) {
  // this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
  //     .then(entry => {
  //         ( < FileEntry > entry).file(file => this.readFile(file))
  //     })
  //     .catch(err => {
  //         this.presentToast('Error while reading file.');
  //     });
  // }

  async readFile(namePath, currentName, newFileName) {

    try{
      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(namePath, currentName);
      const blob: Blob = new Blob([buffer], { //Blob informa o tipo do dado, no caso, uma imagem
                type: 'image/jpeg'
            });
      this.uploadImageData(blob);

          



    } catch(error){
      console.error(error);
    }
    
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //       const formData = new FormData();
  //       const imgBlob = new Blob([reader.result], { //Blob informa o tipo do dado, no caso, uma imagem
  //           type: file.type
  //       });
  //       formData.append('file', imgBlob, file.name);
  //       this.uploadImageData(formData);
  //   };
  //   reader.readAsArrayBuffer(file);

  }

  async uploadImageData(blob: Blob) {
    console.log("FormData= "); 

    const loading = await this.loadingController.create({
        message: 'Uploading image...',
    });
    await loading.present();

    const ref = this.storage.ref('perfilzao.jpg');

    const task = ref.put(blob);


    // this.http.post("http://localhost:80/upload/upload.php", formData)
    //     .pipe(
    //         finalize(() => {
    //             loading.dismiss();
    //         })
    //     )
    //     .subscribe(res => {
    //         if (res['success']) {
    //             this.presentToast('File upload complete.')
    //         } else {
    //             this.presentToast('File upload failed.')
    //         }
    //     });
   }

   verFoto(){
        this.router.navigate(['/profile-picture/profile-picture']);
   }
}
