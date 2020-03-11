import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from './../../../auth/interfaces/user';
import { Events } from '@ionic/angular';


export class JokerService {
  admin:string;
  user:User;
  token:string;

  public events:Events = new Events();
  public storage : Storage;
  private jwtHelper:JwtHelperService;
  public isCordova = false;

  constructor() {
      this.token = '';
    }

    setCordova(param){
      this.isCordova  = param;
    }
    getCordova(param){
      return this.isCordova;
    }

    setToken(token){
      this.storage.set('currentUser',token).then(res => {
        console.log(res);
        // let user = this.jwtHelper.decodeToken(token);
        // this.setDecodedToken(user);
      })
    }

    setDecodedToken(decodedToken){
      console.log(decodedToken)
      
      // this.events.publish('user:created', this.user);
      // this.setUser(this.user);
    }

    setUser(user) {
      this.user = user;
    }
    
    getUser() {
      return this.user;
    }

    getToken(){
      return this.token;
    }
    
}
