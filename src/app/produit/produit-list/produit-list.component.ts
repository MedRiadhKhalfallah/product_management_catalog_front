import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  @Input() produitList: any[];
  @Input() ischangeView;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;

  public produit;

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
  }


  showChildModalView(produit): void {
    if (produit) {
      this.produit = produit;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.produit = null;
    this.childModalView.hide();
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
