import { AppSettings } from './../../shared/classes/AppSettings/appsettings';
import { JokerService } from './../../shared/services/joker_service/joker.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Events, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedState: boolean;

  authenticationState = new BehaviorSubject(false);
  
  private token: any;
  private optionsHeader;
  private headers: Headers = this.getHeaders();
  // public url = 'https://burgerhouse.herokuapp.com' ;
  public url = AppSettings.API_ENDPOINT ;
  //public url ='https://infinity360br.herokuapp.com';


  private userObserver: any;
  private tokenObserver:any;
  public user: User ;
  public hasToken:any;
  public _user:User;
  public _token:any;
  public loading:any;

  constructor(
    public http: HttpClient, 
    public storage: Storage,
    public jokerSvc:JokerService, 
    public jwtHelper:JwtHelperService ,
    public events: Events,  
    private loadingCtrl:LoadingController) {
    console.log(this.url);

    this.loading = this.loadingCtrl.create({
      message: 'Carregando',
    });

    this.tokenObserver = null;
    this.hasToken = Observable.create(observer => {
      this.tokenObserver = observer;
    });
  }

  getHeaders(): Headers {
    return new Headers({
        'Content-Type': 'application/json',
    });
  }

  private handleUser(user) {
    this.loading.dismiss();

    return this.userObserver.next(user) ;
  }

  handleError(error) {
    this.loading.dismiss();
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }

  setToken(value){
    console.log('set token')
    this._token = value;
    this.storage.set('currentUser',value).then(res=>{

      let decodedToken = this.jwtHelper.decodeToken(res);
      this.jokerSvc.setDecodedToken(decodedToken);
    })
  }

  login(user: User) {
    console.log(user)
    // this.loading.present();

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // let body = JSON.stringify(credentials);
    // let body = new URLSearchParams();
    // body.set('email', user.email);
    // body.set('password', user.password);

    return this.http.post(this.url + 'login', user)
      
  }

  logout(){
    // this.storage.set('token', '');
    // this.storage.set('user', '');
  }

  isLogged(){
    var logged = this.storage.get("currentUser").then(
      (res) => { 
        res;
      }
    )
    console.log("Logged é: "+logged);
    return logged;
  }
}
