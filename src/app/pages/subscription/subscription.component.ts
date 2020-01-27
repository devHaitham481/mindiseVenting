import { Component, OnInit } from "@angular/core";
import { IPayPalConfig, ICreateOrderRequest } from "ngx-paypal";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.css"]
})
export class SubscriptionComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  mastercards: boolean = false;
  paypal: boolean = false;
  strip: boolean = false;
  handler: any = null;
  paymentForm: any = "card";
  showSuccess: boolean;
  getPaymentId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initConfig();
    this.loadStripe();
    this.paymentId();
  }

  paymentId() {
    this.route.params.subscribe(params => {
      this.getPaymentId = params["id"];
      console.log(this.getPaymentId);
    });
  }

  loadStripe() {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: "pk_test_aeUUjYYcx4XNfKVW60pmHTtI",
          locale: "auto",
          token: function(token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token);
            alert("Payment Success!!");
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }
  pay(amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_Sw0m0aIOceacsGZkDlrLEYhE00ecveFUHc",
      locale: "auto",
      token: function(token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert("Token Created!!");
      }
    });

    handler.open({
      name: "Venting Hub",
      description: "Subscribe your session today",
      amount: this.getPaymentId * 100
    });
  }

  togglePaymentMethod(ev) {
    if (ev === "paypal") {
      this.paypal = true;
      this.paymentForm = ev;
    } else if (ev === "stripe") {
      this.strip = true;
      this.paymentForm = ev;
    } else {
      this.mastercards = true;
      this.paymentForm = ev;
    }
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: "USD",
      clientId:
        "AaIblM2-i3W4z_nUbKd9Ms1xnDCeL4X98sjXVC-XeGm5izDS7JiCj1qpoK1pO5suIxmEtMbG-OtRgG63",
      createOrderOnClient: data =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Payment Subscription",
              amount: {
                currency_code: "USD",
                value: this.getPaymentId
              }
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data, actions) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: data => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log("OnCancel", data, actions);
      },
      onError: err => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      }
    };
  }
}
