import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public url = environment.url;

  constructor(private http: HttpClient) { }

  addCategory(newCategory){
    let url = this.url + "category";
    return this.http.post(url, newCategory);
  }
  
  addSubcategory(newSubcategory){
    let url = this.url + "subcategory";
    return this.http.post(url, newSubcategory);
  }
}
