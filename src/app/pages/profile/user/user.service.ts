import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private PATH = 'user';

  constructor(private firestore: AngularFirestore) { }

  create_NewUser(record) {
    return this.firestore.collection('users').add(record);
  }
 
  read_users() {
    return this.firestore.collection('users').snapshotChanges();
  }
 
  update_user(recordID,record){
    this.firestore.doc('users/' + recordID).update(record);
  }
 
  delete_user(record_id) {
    this.firestore.doc('users/' + record_id).delete();
  }

}
