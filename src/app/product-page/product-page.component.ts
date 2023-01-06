import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  constructor(private router: Router,
    private routing:ActivatedRoute){}

  onReload(){
    this.router.navigate(['products'], {relativeTo:this.routing})
  }

}
