import { Component } from '@angular/core';
import { RecomendbooksComponent } from '../recomendbooks/recomendbooks.component';

@Component({
  selector: 'app-newproducts',
  standalone: true,
  imports: [RecomendbooksComponent],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})
export class NewproductsComponent {


  role:string="user";
}
