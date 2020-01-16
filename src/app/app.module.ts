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
import { environment } from 'src/environments/environment';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService, AuthGuard, LoginGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
