import { UploadService } from './shared/services/upload_service/upload.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { HiredModalPageModule } from './shared/modals/hired-modal/hired-modal.module';
import { ServiceModalPageModule } from './shared/modals/service-modal/service-modal.module';
import { StarRatingModule } from 'ionic4-star-rating';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/services/auth.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { GoogleMaps } from '@ionic-native/google-maps';
import { UserService } from 'src/app/shared/services/user_services/user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';

//Câmera
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicModule.forRoot(),
    AppRoutingModule, IonicStorageModule.forRoot(), 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthService, AuthGuard, LoginGuard, UploadService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    GoogleMaps
    ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
