import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../auth/interfaces/user';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById( id: number ){
    let url = "https://stagingeutrampo.herokuapp.com/admin/api/users/" + id;

    return this.http.get(url).toPromise()
    .then()
    .catch();

  }

  createUser(usuario: User){
    let url = "https://stagingeutrampo.herokuapp.com/admin/api/users/";
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});

    return this.http.post(url, usuario, { headers : headers }).toPromise()
    .then()
    .catch();
  }

  updateUser(usuario: User){
    let url = "https://stagingeutrampo.herokuapp.com/admin/api/users/";
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});

    return this.http.put(url, usuario, { headers : headers }).toPromise()
    .then()
    .catch();
  }

  deleteUserById( id: number ){
    let url = "https://stagingeutrampo.herokuapp.com/admin/api/users/" + id;

    return this.http.delete(url).toPromise()
    .then()
    .catch();

  }

  

}
