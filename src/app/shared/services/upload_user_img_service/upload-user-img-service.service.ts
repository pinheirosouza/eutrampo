import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  

export class UploadUserImgServiceService {
  

  constructor( public afs: AngularFireStorage ) { }

  upload(filePath:string, file:File) {
    return this.afs.upload(filePath, file);
  }
}
