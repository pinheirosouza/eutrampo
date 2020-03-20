import { environment } from "./../../../../environments/environment";
import { Worker } from "../../interfaces/worker";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WorkerService {
  public url = environment.url + "worker";

  public worker: Worker = {};

  constructor(private http: HttpClient) {}

  addWorker(worker) {
    return this.http.post(this.url, worker);
  }

  updateWorker(worker_id) {
    return this.http.put(this.url + "/worker/", worker_id);
  }

  getUserWorkers(user_id) {
    let url = this.url + "/user/" + user_id;
    return this.http.get(url);
  }
}
