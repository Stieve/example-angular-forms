import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../models/order';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  order: Order;

  constructor() { }

  ngOnInit() {
    this.order = new Order();
    this.order.sauce = 'salsa';
  }

  sendOrder(form: NgForm): void {
    console.log(form);
  }

}
