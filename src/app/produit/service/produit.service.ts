import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;

  }

  public storeProduits(): any {
    return this.http.get(this.baseUrl + '/store-produits');
  }

  public produitSearchWithCriteria(searchobject): any {
    return this.http.post(this.baseUrl + '/produitSearch', searchobject);
  }
  public getProduitById(id): any {
    return this.http.get(this.baseUrl + '/show-produit/' + id);
  }
  public getCategory(): any {
    return this.http.get(this.baseUrl + '/category-produits');
  }

}
