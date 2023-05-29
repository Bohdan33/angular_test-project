import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Route[] = [
  { path: '', component: ProductPageComponent},
  { path: 'about', component: AboutPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
