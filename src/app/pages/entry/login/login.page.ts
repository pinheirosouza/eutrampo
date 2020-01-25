import { User } from './../../../auth/interfaces/user';
import { AuthService } from './../../../auth/services/auth.service';
import { MenuController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public userLogin: User = {};
  private loading: any;

  constructor(
    // public navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }
    
  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch(error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          this.presentToast("Email Inválido");          
          break;
        case "auth/wrong-password":
          this.presentToast("Senha Inválida");         
          break;
        case "auth/user-not-found":
          this.presentToast("Usuário Não Cadastrado");          
          break;
        case "auth/argument-error":
          this.presentToast("Usuário ou Senha Inválidos ");          
          break;
        case "auth/too-many-requests":
          this.presentToast("Limite de tentativas atingido. Tente novamente mais tarde.");          
          break;
        case "auth/network-request-failed":
          this.presentToast("Erro ao logar. Verifique sua conexão com a internet.");          
          break;
          
        default:
          this.presentToast("Algo deu errado");   
          break;
      }
      
    } finally {
      this.router.navigate(['home']);
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde',
      spinner:"dots",
      cssClass: 'loading'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      message,
      duration: 2000
      
    });
    toast.present();
  }

}
