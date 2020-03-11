import { FormBuilder } from '@angular/forms';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { JokerService } from './shared/services/joker_service/joker.service';
import { UploadService } from './shared/services/upload_service/upload.service';


import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
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



//Câmera
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


import { Storage} from '@ionic/storage';



export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('currentUser');
    },
    whitelistedDomains: ['localhost:5000']
  }
}

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
    HttpClientModule,
    JwtModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    })
  ],
  providers: [
    FormBuilder,
    JwtHelperService, 
    StatusBar,
    SplashScreen,
    UserService,
    AuthService, 
    JokerService,
    AuthGuard, LoginGuard, 
    UploadService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    GoogleMaps,

 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
