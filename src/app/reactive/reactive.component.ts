import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../models/order';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;

  constructor() { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mySauce: new FormControl('chili')
    });
  }

  sendOrder(): void {
    console.log(this.orderForm);
  }
}
