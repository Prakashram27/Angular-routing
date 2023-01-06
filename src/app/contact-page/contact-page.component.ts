import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private routes:Router){}

  onGoHome(){
    this.routes.navigate(['home'])
    
  }
}
