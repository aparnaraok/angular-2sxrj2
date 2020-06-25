import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; //Get an input from user
import { Output, EventEmitter } from '@angular/core'; //to display output when user clicks


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}