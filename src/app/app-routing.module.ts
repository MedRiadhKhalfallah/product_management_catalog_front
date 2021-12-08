import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitIndexComponent} from './produit/produit-index/produit-index.component';

const routes: Routes = [
  {path: '', component: ProduitIndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
