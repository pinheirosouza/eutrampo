import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  // task: AngularFireUploadTask;
  complete: boolean;
  caminhoImagem: string;
  imgUrl: Observable<string>;
  

  constructor(
    private storage: AngularFireStorage
  ) { }

  async uploadImage(imageURI, uid): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('users').child(uid + ".jpg");//todo
      this.encodeImageUri(imageURI, function(image64){
        let task = imageRef.putString(image64, 'data_url');
        
        // task.then(snapshot => {
          
        //   console.log(snapshot.downloadURL);
        // }, err => {
        //   reject(err);
        // })

        console.log("img uploaded");
      })
       
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };
  
}