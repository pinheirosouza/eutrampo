import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user/user.service';

import { User } from '../../../shared/interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  result: any;

  public userRegister: User;
  private image;
  private tempImg;

  constructor(
    private router: Router,
    private userService: UserService,
    
  ) { }

  ngOnInit() {
    console.log(this.userRegister);
  }

  // getUser(){
  //   //chamar tela de aguarde
  //   this.userService.getUserById(/*user id*/)
  //   .then(( response ) => {
  //     this.result = JSON.stringify(response);
  //     //fechar tela de aguarde
  //   })
  //   .catch(( response ) => {
  //     this.result = JSON.stringify(response);
  //   })
  // }
      
  // createUser(){
  //   let user = this.userRegister;

  //   //chamar tela de aguarde
  //   this.userService.createUser(user)
  //   .then(( response ) => {
  //     this.result = JSON.stringify(response);
  //     //fechar tela de aguarde
  //     console.log(user)
  //   })
  //   .catch(( response ) => {
  //     this.result = JSON.stringify(response);
  //     console.log(user)
  //   })
    
  // }

  // updateUser(){
  //   let user = this.user;

  //   //chamar tela de aguarde
  //   this.userService.updateUser(user)
  //   .then(( response ) => {
  //     this.result = JSON.stringify(response);
  //     //fechar tela de aguarde
  //   })
  //   .catch(( response ) => {
  //     this.result = JSON.stringify(response);
  //   })
  // }
  
  // deleteUserById(){
  //   let user = this.user;

  //   //chamar tela de aguarde
  //   this.userService.deleteUserById(/*user id*/)
  //   .then(( response ) => {
  //     this.result = JSON.stringify(response);
  //     //fechar tela de aguarde
  //   })
  //   .catch(( response ) => {
  //     this.result = JSON.stringify(response);
  //   })
  // }
  

}
