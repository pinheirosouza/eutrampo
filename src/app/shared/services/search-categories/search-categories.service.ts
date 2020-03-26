import { environment } from './../../../../environments/environment';
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchCategoriesService {
  public url = environment.url + "category/listwithsubcategory"

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.url);
  }

}
