import {Component, Input, OnInit} from '@angular/core';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.css']
})
export class ProduitViewComponent implements OnInit {

  @Input() produitId;
  public loading = false;
  public produit;

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.loadData();
  }
  public handleError(error): any {
    this.loading = false;
  }

  public handleResponse(data): any {
    this.produit = data;
    this.loading = false;
  }

  public loadData(): any {
    this.loading = true;
    this.produitService.getProduitById(this.produitId).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
