import { UploadService } from './shared/services/upload/upload.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AutosizeModule } from 'ngx-autosize';
import { FormBuilder } from "@angular/forms";
import { JwtHelperService, JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, NavParams } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { GoogleMaps } from "@ionic-native/google-maps";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

//Câmera
//import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { Storage } from "@ionic/storage";
import { Platform } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get("access_token");
    },
    whitelistedDomains: ['https://stagingeutrampo.herokuapp.com/admin/api/']
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AutosizeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
  ],
  providers: [
    FormBuilder,
    JwtHelperService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    CallNumber,
    EmailComposer,
    Camera,
    FileTransfer,
    UploadService,
    OneSignal,
    Platform
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
