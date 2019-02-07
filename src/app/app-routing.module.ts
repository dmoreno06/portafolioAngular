import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages/products/products.component';
import { SearchComponent } from './pages/search/search.component';

const router: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( router, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
