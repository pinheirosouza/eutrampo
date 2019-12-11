import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
