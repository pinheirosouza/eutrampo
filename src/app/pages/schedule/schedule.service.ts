
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  tarefas: [];
  tarefa :{
        by_user_id: any,
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
    let url= "https://stagingeutrampo.herokuapp.com/app/api/appointment"
    let headers= new HttpHeaders({'Content-type':'application/json'})
    return this.http.post(url, data, {headers : headers}).toPromise();
  }

  getTarefas(user_id) {
    console.log("buscando");
    let url= "https://stagingeutrampo.herokuapp.com/app/api/appointment/user/"+user_id

    return this.http.get(url).toPromise()
  }

}