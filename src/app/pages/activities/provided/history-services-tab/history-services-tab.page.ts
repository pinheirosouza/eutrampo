import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-services-tab',
  templateUrl: './history-services-tab.page.html',
  styleUrls: ['./history-services-tab.page.scss'],
})
export class HistoryServicesTabPage implements OnInit {

  providedList: any;

  constructor() {
    {
      this.providedList = [
        { name:'Pedro Souza', 
          pic:"../../../assets/img/pedro.jpg", 
          servicetype:'Pedreiro', 
          provided: 145, 
          price: 45, 
          redirectTo: "#"},
  
        { name:'Fernando Toledo', 
          pic:"../../../assets/img/fernando.jpeg", 
          servicetype:'Costureiro', 
          provided: 184, 
          price: 20, 
          redirectTo: "#"},
  
        { name:'Felipe Freitas', 
          pic:"../../../assets/img/felipe.png", 
          servicetype:'Professor Particular', 
          provided: 82, 
          price: 60, 
          redirectTo: "#"},
      ]
    }
   }

  ngOnInit() {
  }

}
