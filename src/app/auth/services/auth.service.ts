import { User } from './../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afa: AngularFireAuth ) {
    console.log("---------------------------> NEW AUTH SERVICE");
  }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  
  deleteCurrentUser() {
    return this.afa.auth.currentUser.delete()
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

  updateEmail(email) {
    return this.afa.auth.currentUser.updateEmail(email)
  }

  updatePassword(password) {
    return this.afa.auth.currentUser.updatePassword(password)
  }

  getId() {
    return this.afa.auth.currentUser.uid
  }
}
