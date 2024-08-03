import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewproductsComponent } from '../newproducts/newproducts.component';
import { OldproductsComponent } from '../oldproducts/oldproducts.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,NewproductsComponent,OldproductsComponent , RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
