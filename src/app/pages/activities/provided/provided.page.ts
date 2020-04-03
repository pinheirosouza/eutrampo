import { Component, OnInit } from '@angular/core';
import { DevelopingService } from 'src/app/shared/services/developing/developing.service';


@Component({
  selector: 'app-provided',
  templateUrl: './provided.page.html',
  styleUrls: ['./provided.page.scss'],
})
export class ProvidedPage implements OnInit {

  constructor( public developingService: DevelopingService ) {}

  ngOnInit() {}

  developing(){
    this.developingService.developing()
  }
}