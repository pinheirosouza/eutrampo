import { Injectable } from "@angular/core";
import { Platform, AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { environment } from "../../../../environments/environment";
import { tap, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = "access_token";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  update(credentials, user_id){
    return this.http.put(this.url+"users/"+ user_id, credentials).toPromise()
  }

  updatePassword(passwordChange, user_id){
    return this.http.put(this.url+"users/change-password/"+user_id, passwordChange).toPromise()
  }
  // remove(user_id){
  //   return this.http.delete(this.url+"/users/"+ user_id).pipe(
  //     catchError(e => {
  //       this.showAlert(e.error.msg);
  //       throw new Error(e);
  //     })
  //   );
  // }

  register(credentials) {
    return this.http.post(`${this.url}users`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}login`, credentials).pipe(
      tap(res => {
        this.storage.set(TOKEN_KEY, res["token"]);
        this.user = this.helper.decodeToken(res["token"]);
        this.authenticationState.next(true);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  getUserData(user_id) {
    return this.http.get(this.url + "users/" + user_id);
  }

  getUserCounter(user_id) {
    return this.http.get(this.url + "users/report/" + user_id);
  }


  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"]
    });
    alert.then(alert => alert.present());
  }
}
