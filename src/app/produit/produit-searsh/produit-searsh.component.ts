import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-produit-searsh',
  templateUrl: './produit-searsh.component.html',
  styleUrls: ['./produit-searsh.component.css']
})
export class ProduitSearshComponent implements OnInit {

  @Output() searchProduit: EventEmitter<any> = new EventEmitter<any>();
  @Input() loading;
  public loadingCategory = false;
  public categoryList;
  public form = {
    productName: null,
    category: null,
    price: null,
    limit: 10,
    offset: 0
  };

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  public vide(): any {
    this.form = {
      productName: null,
      category: null,
      price: null,
      limit: 10,
      offset: 0
    };
  }

  public onSubmit(): any {
    this.form.limit = 10;
    this.form.offset = 0;
    return this.searchProduit.emit(this.form);
  }

  public handleError(error): any {
    this.loadingCategory = false;
  }

  public handleResponse(data): any {
    this.categoryList = data;
    this.loadingCategory = false;
  }

  public loadCategory(): any {
    this.loadingCategory = true;
    this.produitService.getCategory().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


}
