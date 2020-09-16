
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  tarefas: [];
  tarefa :{
        by_user_id: any,
       // for_user_id: any,
      //  worker_id:any,
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
        price: any
    }

  constructor(private http : HttpClient) { }
  

  setTarefas(data : any) {
    this.tarefas = data;
    let url= "https://stagingeutrampo.herokuapp.com/app/api/appointments"
    let headers= new HttpHeaders({'Content-type':'application/json'})
    return this.http.post(url, data, {headers : headers}).toPromise();
  }

  getTarefas(user_id : any) {
    console.log("buscando");
    let url= "https://stagingeutrampo.herokuapp.com/app/api/appointments/user/"+user_id
    console.log(this.http.get(url))
    return this.http.get(url).toPromise()
  }
  
  deleteTarefas(_id : any){
    let url= "https://stagingeutrampo.herokuapp.com/app/api/appointments/"+_id
    let headers= new HttpHeaders({'Content-type':'application/json'})
    return this.http.delete(url).toPromise()
  }

}