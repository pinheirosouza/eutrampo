import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JokerService } from './../../../shared/services/joker_service/joker.service';
import { User } from './../../../auth/interfaces/user';
import { AuthService } from './../../../auth/services/auth.service';
import { MenuController, NavController, LoadingController, ToastController, AlertController, Events } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  result: any;
  logoPrincipal: any = "in";
  logoFundo: any = "in";
  loginState: any = "in";
  formState: any = "in";
  formLogin : any;
  submitAttempt:boolean = false;

  public userLogin: User = {};
  private loading: any;

  constructor(public navCtrl: NavController,
    public events:Events, 
    public jwtHelper:JwtHelperService , 
    public shareSvc: JokerService, 
    private auth:AuthService,
    private formBuilder:FormBuilder, 
    private alertCtrl:AlertController, 
    // private facebook:Facebook
    ) {
    this.formLogin = formBuilder.group({
      id: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(){
    console.log("Tem usuário logado?" + this.auth.isLogged())
  }
    
  login(){
    if(this.formLogin.valid)
      this.submitAttempt = true;
    else{
      this.auth.login(this.userLogin).subscribe(
        data => {
          console.log(this.userLogin)
          console.log(data)
          if(data) {
            // this.setHomePage();
            // let decodedToken = this.jwtHelper.decodeToken(data.token);
            // this.events.publish('user:created',decodedToken.user);
            // this.shareSvc.setDecodedToken(decodedToken);
            console.log("Token "+data["token"])
            this.auth.setToken(data["token"]);
          }else
            // this.errorMessage("Usuário/senha incorreta!");
            console.log("Erro")
        },error => {
          console.log('deu ruim');
          console.log(error);
          return Observable.throw(error);
        }
      )
    };
  }
}

  // errorMessage(message){
  //   let alert = this.alertCtrl.create({
  //     header: 'Erro',
  //     subHeader: message,
  //     buttons: ['Ok']
  //   });
  //   alert.present();
  // }