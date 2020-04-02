import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  public url = environment.url + "services/";

  constructor(private http: HttpClient) {}

  getUserJobsProvidedHistory(user_id){
    this.http.get(this.url + user_id)
  }
  
  getUserJobsHiredHistory(user_id){
    this.http.get(this.url + user_id)
  }

}
