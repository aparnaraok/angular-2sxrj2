import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,

  ) {
     this.checkoutForm = this.formBuilder.group({
     name: '',
     address: ''
    });
    console.log(this.checkoutform)
   }

  ngOnInit() {
  }

  // onClickOpenForm(){
  //   this.openform=true;  
  // }

}