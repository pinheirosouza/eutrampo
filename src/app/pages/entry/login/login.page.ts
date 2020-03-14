import { User } from "../../../shared/interfaces/user";
import { AuthService } from "../../../shared/services/auth/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  userLogin: User = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.userLogin).subscribe();
  }

}
