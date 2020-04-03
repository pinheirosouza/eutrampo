import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DevelopingService } from 'src/app/shared/services/developing/developing.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(
    public developingService: DevelopingService
  ) {}

  ngOnInit() {
  }

  developing(){
    this.developingService.developing()
  }

}
