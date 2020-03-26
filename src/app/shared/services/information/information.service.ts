import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public url = environment.url;

  constructor( private http: HttpClient ) { }

  getOpportunities() {
    return this.http.get(this.url + "opportunnities");
    //trocar opportunnities por opportunities no back
  }
  
  getNews() {
    return this.http.get(this.url + "news");
    
  }
}
