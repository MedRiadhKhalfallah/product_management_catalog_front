import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitIndexComponent } from './produit/produit-index/produit-index.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ProduitSearshComponent } from './produit/produit-searsh/produit-searsh.component';
import { ProduitViewComponent } from './produit/produit-view/produit-view.component';
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {PaginationModule} from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProduitIndexComponent,
    ProduitListComponent,
    ProduitSearshComponent,
    ProduitViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    ProgressbarModule,
    PaginationModule.forRoot(),
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
