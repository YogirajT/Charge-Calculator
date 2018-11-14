import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'calculator', component: ProductsComponent },
  { path: 'hero', component: HeroFormComponent },
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
