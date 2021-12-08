import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {ProduitService} from '../service/produit.service';
import {ProgressbarConfig} from 'ngx-bootstrap/progressbar';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), {animate: true, striped: true, max: 100});
}

@Component({
  selector: 'app-produit-index',
  templateUrl: './produit-index.component.html',
  styleUrls: ['./produit-index.component.css'],
  providers: [{provide: ProgressbarConfig, useFactory: getProgressbarConfig}]
})

export class ProduitIndexComponent implements OnInit {

  public produitList = [];
  public searchobject = {limit: 10, offset: 0};
  public loading = false;
  public loadingAPI = false;
  currentPage = 1;
  page?: number;
  showBoundaryLinks = true;
  limit = 10;
  offset = 0;
  totalCount = 0;
  message;
  ischangeView = false;

  constructor(private produitService: ProduitService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.loadData({});
  }

  public handleError(error): any {
    this.loading = false;
  }

  public handleResponse(data): any {
    this.produitList = data.produits;
    this.totalCount = data.totalCount;
    this.loading = false;
  }

  public loadData(searchobject: any): any {
    this.loading = true;
    if (Object.keys(searchobject).length !== 0) {
      this.searchobject = searchobject;
    }
    this.produitService.produitSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.offset = (this.page - 1) * this.limit;
    this.searchobject.limit = this.limit;
    this.searchobject.offset = this.offset;
    this.loadData(this.searchobject);

  }

  getDataFromApi(): void {
    this.loadingAPI = true;
    this.message = null;
    this.produitService.storeProduits().subscribe(
      data => this.handleResponseApi(data),
      error => this.handleErrorApi(error)
    );
  }

  public handleErrorApi(error): any {
    this.loadingAPI = false;
  }

  public handleResponseApi(data): any {
    this.message = data;
    this.loadingAPI = false;
    this.loadData({});
  }

  public changeView(): any {
    this.ischangeView = !this.ischangeView;
  }

}
