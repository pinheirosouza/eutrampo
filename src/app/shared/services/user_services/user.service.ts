import { User } from '../../../auth/interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  create_NewUser(user: User, uid) {
    return this.firestore.collection("users").doc(uid).set(user);;
  }
 
  readUser(uid:string): AngularFirestoreDocument<User> {
    return this.firestore.collection('users').doc(uid);
  }
 
  update_user(uid,newData){
    this.firestore.doc('users/' + uid).update(newData);
  }
 
  deleteUser(uid) {
    this.firestore.doc('users/' + uid).delete();
  }

  sendToBack(){
    return 
  }

}
