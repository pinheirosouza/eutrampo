import { Component } from '@angular/core';

import { Platform, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/services/auth.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Página Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Serviços Contratados',
      url: '/hired',
      icon: 'bookmarks'
    },
    {
      title: 'Serviços Prestados',
      url: '/provided',
      icon: 'hammer'
    },
    {
      title: 'Conversas',
      url: '/chat',
      icon: 'chatboxes'
    },
    {
      title: 'Minha Agenda',
      url: '/schedule',
      icon: 'calendar'
    },
    {
      title: 'Notícias',
      url: '/news',
      icon: 'paper'
    },
    {
      title: 'Oportunidades',
      url: '/opportunities',
      icon: 'briefcase'
    },
    {
      title: 'Explorar',
      url: '/discover',
      icon: 'compass'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'contact'
    },
   
    
  ];

  hideMenu: boolean;
  private loading:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
      this.router.events.subscribe((event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          console.log(event.url);
          switch (event.url) {
            case "/login":
            {
              this.hideMenu = true;
              break;
            }
            case "/register":
            {
              this.hideMenu = true;
              break;
            }
            case "/chat":
            {
              this.hideMenu = true;
              break;
            }
            case "/profile":
            {
              this.hideMenu = true;
              break;
            }
            case "/profile/user":
            {
              this.hideMenu = true;
              break;
            }
            case "/profile/settings":
            {
              this.hideMenu = true;
              break;
            }
            case "/profile/help":
            {
              this.hideMenu = true;
              break;
            }
            case "/profile/about":
            {
              this.hideMenu = true;
              break;
            }
          
            default:
            {
              this.hideMenu = false;
                break;
            }
          }
        }
        console.log('Menu:',this.hideMenu)    });
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch(error) {
      console.log(error);
      this.presentToast(error.message);   
    } finally {
      this.router.navigate(['login']);
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde',
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
