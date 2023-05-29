import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public get productsService(): ProductsService {
    return this._productsService;
  }
  public set productsService(value: ProductsService) {
    this._productsService = value;
  }
  title = 'angular test project';
  products: IProduct[] = []

  loading = false

  // products$: Observable<IProduct[]>

  term = ''

  constructor(
    private _productsService: ProductsService,
    public modalService: ModalService
    ) {

  }
  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
