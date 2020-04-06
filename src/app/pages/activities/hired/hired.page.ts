import { JobService } from './../../../shared/services/job/job.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hired',
  templateUrl: './hired.page.html',
  styleUrls: ['./hired.page.scss'],
})
export class HiredPage implements OnInit {
  
  public hiredList: any;

  constructor(jobService: JobService){}

  ngOnInit(){
  }

}
