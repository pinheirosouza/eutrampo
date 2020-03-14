
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  tarefas: [];
  tarefa :{
        title: any,
        description: any,
        startTime: Date,
        endTime: Date,
        allDay: any,
        address:  {
          neighborhood:any ,
          number: any,
          city: any,
          state: any,
          complement: any ,
          cep:any };
    }

  constructor(private http : HttpClient) { }
  

  setTarefas(data : any) {
    this.tarefas = data;
    let url= "https://stagingeutrampo.herokuapp.com/admin/api/appointment/user/"
    let headers= new HttpHeaders({'Content-type':'application/json'})
    return this.http.post(url, data, {headers : headers}).toPromise();
    console.log(this.tarefas)
  }

  getTarefas(user_id) {
    console.log("ta funcionando");
    let url= "https://stagingeutrampo.herokuapp.com/admin/api/appointment/user/"+user_id

    return this.http.get(url).toPromise()
    //return this.tarefas;
  }

  setTarefa(data) {
    this.tarefa = data;
  }

  getTarefa() {
    return this.tarefa;
  }
}