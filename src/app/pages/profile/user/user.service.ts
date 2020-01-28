import { User } from './../../../auth/interfaces/user';
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
 
  update_user(recordID,record){
    this.firestore.doc('users/' + recordID).update(record);
  }
 
  delete_user(record_id) {
    this.firestore.doc('users/' + record_id).delete();
  }

}
