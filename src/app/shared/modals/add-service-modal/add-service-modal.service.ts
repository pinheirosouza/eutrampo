import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddServiceModalService {

  constructor(private http: HttpClient) { }

  getServices(){
    let url = "https://stagingeutrampo.herokuapp.com/admin/api/category/listwithsubcategory"
    console.log("Buscou")
    return this.http.get(url).toPromise()
  }

}
