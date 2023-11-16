import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from 'app/apiServer';
import { Producto } from 'app/models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) {

  }

  getProduct (): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.ApiUrl}`);
  }

}
