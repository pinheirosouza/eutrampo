import { Storage } from "@ionic/storage";
import { Component } from "@angular/core";

import {
  Platform,
  MenuController,
  LoadingController,
  ToastController
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./shared/services/auth/auth.service";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Página Inicial",
      url: "/home",
      icon: "home"
    },
    {
      title: "Serviços Contratados",
      url: "/hired",
      icon: "bookmarks"
    },
    {
      title: "Serviços Prestados",
      url: "/provided",
      icon: "hammer"
    },
    {
      title: "Conversas",
      url: "/conversations",
      icon: "chatboxes"
    },
    {
      title: "Minha Agenda",
      url: "/schedule",
      icon: "calendar"
    },
    {
      title: "Notícias",
      url: "/news",
      icon: "paper"
    },
    {
      title: "Oportunidades",
      url: "/opportunities",
      icon: "briefcase"
    },
    {
      title: "Explorar",
      url: "/discover",
      icon: "compass"
    },
    {
      title: "Perfil",
      url: "/profile",
      icon: "contact"
    },
    {
      title: "Admin",
      url: "/admin-home",
      icon: "cog"
    }
  ];

  hideMenu: boolean;
  private loading: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      //Remove this method to stop OneSignal Debugging 
      window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
      
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
      
      // Set your iOS Settings
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = false;
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
      
      window["plugins"].OneSignal
        .startInit("36c10bac-5a12-4927-8693-4ff615483f38")
        .handleNotificationOpened(notificationOpenedCallback)
        .iOSSettings(iosSettings)
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
        .endInit();
      
      // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
      window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
      });
    });

    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        switch (event.url) {
          case "/login": {
            this.hideMenu = true;
            break;
          }
          case "/register": {
            this.hideMenu = true;
            break;
          }
          case "/conversations": {
            this.hideMenu = true;
            break;
          }
          case "/profile": {
            this.hideMenu = true;
            break;
          }
          case "/profile/user": {
            this.hideMenu = true;
            break;
          }
          case "/profile/settings": {
            this.hideMenu = true;
            break;
          }
          case "/profile/help": {
            this.hideMenu = true;
            break;
          }
          case "/profile/about": {
            this.hideMenu = true;
            break;
          }

          default: {
            this.hideMenu = false;
            break;
          }
        }
      }
      console.log("Menu:", this.hideMenu);
    });
    
    this.authService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(["home"]);
      } else {
        this.router.navigate(["login"]);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
      this.setupPush();
    
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('27ce2159-70ab-46ce-bd1c-5b9ffc4f0bb4', '1059100373802');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }

  logout() {
    this.authService.logout();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Aguarde"
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
