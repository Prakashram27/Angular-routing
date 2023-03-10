import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path : 'home', component: HomePageComponent},
  { path: 'products', component: ProductPageComponent  },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
