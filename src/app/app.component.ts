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
import { DevelopingService } from './shared/services/developing/developing.service';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Página Inicial",
      click: "navigate(home)",
      icon: "home"
    },
    {
      title: "Serviços Contratados",
      click: "navigate(hired)",
      icon: "bookmarks"
    },
    {
      title: "Serviços Prestados",
      click: "navigate(provided)",
      icon: "hammer"
    },
    {
      title: "Conversas",
      icon: "chatboxes",
      click: "developing()"
    },
    {
      title: "Minha Agenda",
      click: "navigate(schedule)",
      icon: "calendar"
    },
    {
      title: "Notícias",
      click: "navigate(news)",
      icon: "paper"
    },
    {
      title: "Oportunidades",
      click: "navigate(opportunities)",
      icon: "briefcase"
    },
    {
      title: "Explorar",
      click: "navigate(discover)",
      icon: "compass"
    },
    {
      title: "Perfil",
      click: "navigate(profile)",
      icon: "contact"
    },
    {
      title: "Admin",
      click: "navigate(admin)",
      icon: "cog"
    },
    {
      title: "Sair",
      icon: "log-out",
      click: "logout()"
    }
  ];

  hideMenu: boolean;
  private loading: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage,
    public developingService: DevelopingService
  ) {
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

  developing(){
    this.developingService.developing()
  }

  navigate(url){
    this.router.navigate([url.toString()])
  }
}
