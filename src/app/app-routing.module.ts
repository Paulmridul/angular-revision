import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HelloComponent} from './hello.component';
import {ProductsComponent} from './products/products.component';

const routes : Routes =[
  {path:'',component: HelloComponent},
  {path:'Products',component:ProductsComponent}
  ];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}