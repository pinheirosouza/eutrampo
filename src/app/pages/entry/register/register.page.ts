import { AuthService } from './../../../shared/services/auth/auth.service';
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

  userRegister: User = {};

  constructor(private authService: AuthService) {}


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
      
  register() {
    this.authService.register(this.userRegister).subscribe(res => {
      // Call Login to automatically login the new user
      this.authService.login(this.userRegister).subscribe();
    });
  }

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
