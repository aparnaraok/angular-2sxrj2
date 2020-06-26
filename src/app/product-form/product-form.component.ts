import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService,
  ) {
     this.checkoutForm = this.formBuilder.group({
     name: '',
     address: ''
    });
    console.log(this.checkoutform)
   }

  ngOnInit() {
      this.openform = this.cartService.onClickOpenForm();

  }
  
//  onClickOpenForm(){
//     this.openform=true;
//     console.log("openform......", this.openform)
//     return this.openform;
//   }

}