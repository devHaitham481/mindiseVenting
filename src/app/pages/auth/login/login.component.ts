import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private router: Router) {}

  ngOnInit() {}
  signin() {
    if (
      this.username === "admin@ventinghub.com" &&
      this.password === "admin@123"
    ) {
      const data = {
        id: 12,
        username: this.username,
        password: this.password
      };
      localStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(["/"]);
    } else {
      alert("invalid password");
    }
  }
}
