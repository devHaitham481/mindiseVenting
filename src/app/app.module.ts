import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutComponent } from "./pages/about/about.component";
import { ServiceComponent } from "./pages/service/service.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { SharedModule } from "./shared/shared.module";
import { PagesViewComponent } from "./pages/pages-view/pages-view.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CalendlyComponent } from "./pages/calendly/calendly.component";
import { SubscriptionComponent } from "./pages/subscription/subscription.component";
import { NgxPayPalModule } from "ngx-paypal";
import { NgxStripeModule } from "ngx-stripe";
import { AuthGuard } from "./shared/guard/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ChatComponent,
    PagesViewComponent,
    CalendlyComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
    SharedModule,
    NgxStripeModule.forRoot("pk_test_Sw0m0aIOceacsGZkDlrLEYhE00ecveFUHc"),
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
