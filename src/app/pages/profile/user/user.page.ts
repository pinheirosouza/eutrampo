import { AuthService } from "./../../../shared/services/auth/auth.service";
import { User } from "./../../../shared/interfaces/user";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.page.html",
  styleUrls: ["./user.page.scss"]
})
export class UserPage implements OnInit {
  public userUpdate: User = {};
  public userData: User = {};

  constructor(private authService: AuthService) {
    this.authService.getUserData(this.authService.user._id).subscribe(res => {
      this.userData = res;
      this.userUpdate = res;
      console.log(this.userData);
    });
  }

  ngOnInit() {}

  updateUser() {
    console.log("usuário antigo: ", this.userData);
    console.log("usuário novo: ", this.userUpdate);
    this.authService.update(this.userUpdate, this.authService.user._id).then(
      res => console.log(res)
    )
    .catch(
      err => console.log(err)
    )
    
  }

  // deleteUser(){
  //   this.authService.remove(this.authService.user._id)
  // }
}
