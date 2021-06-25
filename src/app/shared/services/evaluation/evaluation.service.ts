import { AuthService } from './../auth/auth.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EvaluationService {
    constructor(private http : HttpClient) { }

    getEvaluationById(id){
      let url = 'https://stagingeutrampo.herokuapp.com/admin/api/evaluationRef/:'+id
      return this.http.get(url)
    }

    setNewEvaluationById(id,rating){
      let url = 'https://stagingeutrampo.herokuapp.com/admin/api/evaluation'
      return this.http.get(url).toPromise()
    }



}