
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  tarefas: [];
  tarefa :{
        title: any,
        startTime: Date,
        endTime: Date,
        allDay: any;
    }

  constructor() { }
  
  setTarefas(data) {
    this.tarefas = data;
    console.log(this.tarefas)
  }

  getTarefas() {
    console.log("ta funcionando");
    return this.tarefas;
  }

  setTarefa(data) {
    this.tarefa = data;
  }

  getTarefa() {
    return this.tarefa;
  }
}