import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'' , component:LoginComponent}, //replaced HomeComponent with Login component
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tags', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


  
  
 
export class AppRoutingModule { }
