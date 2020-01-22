import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {};
  private loading: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
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
        case "auth/weak-password":
          this.presentToast("A senha deve conter ao menos 6 caracteres.");          
        break;
        case "auth/email-already-in-use":
          this.presentToast("Este email já está sendo utilizado.");          
        break;
        
          
        default:
          this.presentToast("Algo deu errado");   
          break;
      }
      this.router.navigate(['register']);
      
    } finally {
      
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
    });
    toast.present();
  }

}
