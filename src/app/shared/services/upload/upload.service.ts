import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';

@Injectable()
export class UploadService {
  public url = environment.url + "upload";

  constructor(private transfer: FileTransfer, public storage:Storage) {
    console.log();
  }


  uplodFile(file){
    console.log(file)
    return new Promise(resolve => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    // this.ng2ImgMaxService.compressImage(file,0.3,false,false).subscribe(newImg =>{
      this.storage.get('token').then(res => {
        let token = res;
        var options = {
            fileKey: "image",
            fileName: 'fileName.jpeg',
            chunkedMode: false,
            mimeType: "multipart/form-data",
            httpMethod:'POST',
            headers:{
              Authorization: token,
              'x-access-token':token
            }
        };

          fileTransfer.upload(file,this.url, options)
          .then((results) => {
            let res = JSON.parse(results.response);
            resolve(res)
            console.log(res);
          }, error => {
            console.log(error)
              alert('server error');
          });
        })
      // })
    })

  }
}