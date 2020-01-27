import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { AuthViewComponent } from "./auth-view/auth-view.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent, AuthViewComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule]
})
export class AuthModule {}
