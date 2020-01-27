import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  checkAuth: any;
  constructor() {}

  ngOnInit() {
    this.getAuth();
  }
  getAuth() {
    const auth = localStorage.getItem("user");
    const authParse = JSON.parse(auth);
    this.checkAuth = authParse;
    console.log(this.checkAuth);
  }
  signout() {
    localStorage.clear();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
