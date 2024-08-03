import { Component, Input } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-bookpro',
  standalone: true,
  imports: [],
  templateUrl: './bookpro.component.html',
  styleUrl: './bookpro.component.css'
})
export class BookproComponent {


  @Input()product!:Iproduct;
  @Input()iseven!:Number;
}
