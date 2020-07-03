import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.css']
})
export class SubscriptionCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subscription = [{
    type: "FREE",
    money_per_month: "$0",
    features: [
     ["Single User",true],
     ["5GB Storage",true],
     ["Unlimited Public Projects",true],
     ["Community Access",true],
     ["Unlimited Private Projects",false],
     ["Dedicated Phone Support",false],
     ["Free Subdomain",false],
     ["Monthly Status Reports",false]
     ]
    },
    {
      type: "PLUS",
      money_per_month: "$9",
      features: [
       ["5 Users",true],
       ["50GB Storage",true],
       ["Unlimited Public Projects",true],
       ["Community Access",true],
       ["Unlimited Private Projects",true],
       ["Dedicated Phone Support",true],
       ["Free Subdomain",true],
       ["Monthly Status Reports",false]
       ]
      },
      {
        type: "PRO",
        money_per_month: "$49",
        features: [
         ["Unlimited User",true],
         ["150GB Storage",true],
         ["Unlimited Public Projects",true],
         ["Community Access",true],
         ["Unlimited Private Projects",true],
         ["Dedicated Phone Support",true],
         [`<b>Unlimited</b> Free Subdomains`,true],
         ["Monthly Status Reports",true]
         ]
        },
      ]

}
