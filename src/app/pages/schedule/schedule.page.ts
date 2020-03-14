import { ScheduleService } from './schedule.service';
import { Component, ViewEncapsulation, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchedulePage implements OnInit {

  event = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    allDay: false,
    address: {
      neighborhood: '',
      number: '',
      city: '',
      state: '',
      complement: '',
      cep: '' },
  };
  mesAtual = {data:''};
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent,{static:false}) myCal: CalendarComponent;
 
  constructor(private alertCtrl: AlertController, private scheduleService: ScheduleService, @Inject(LOCALE_ID) private locale: string) { }
 
  ngOnInit() {
    this.resetEvent();
    // this.eventSource = JSON.parse(JSON.stringify(this.scheduleService.getTarefas(id)))
  }
  
 
  resetEvent() {
    this.event = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false,
      address:  {
        neighborhood:'' ,
        number: '',
        city: '',
        state: '',
        complement:'' ,
        cep:'' },
    };
  }
 
  // Create the right event format and reload source
  addNewEvent() {
    let eventCopy = {
      title: this.event.title,
      description: this.event.description,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      address: this.event.address
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
    console.log(this.eventSource)
    this.scheduleService.setTarefas(this.eventSource).then((res)=>{
      console.log(res)
      console.log("funcionou")
    })
    .catch(()=>{
      console.log("não funcionou")
    });
  }
   // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date range and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
  title = title.charAt(0).toUpperCase()+ title.slice(1)
  var pos = title.search(",");
  if(pos>0){
    title = title.substring(0,pos)
  }

  this.mesAtual.data=title

}
 
// Calendar event was clicked
async onEventSelected(event) {
  let selectedEvent = event
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader:event.description,
    message:'Endereço: '+event.address.complement+", "+event.address.number+", "
    +event.address.neighborhood+", "+event.address.city,
    buttons: ['OK',
    {
      text:"Apagar",
      handler:() => {
        this.removeEvent(selectedEvent)
      }
    }]
  });
  alert.present();
}
 
removeEvent(event){
  console.log(event);
  for(var i=0; i< this.eventSource.length; i++){
    if(event === this.eventSource[i]){
      this.eventSource.splice(i,1)
    }
  }
  this.myCal.loadEvents();
  console.log(this.eventSource)
  this.scheduleService.setTarefas(this.eventSource);
}

// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}
}
