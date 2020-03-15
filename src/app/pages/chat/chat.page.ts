import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToChat(){
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(this.user)
    //   }
    // };
    // this.router.navigate(['conversas']);
  }

}
