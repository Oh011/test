import { Component, ViewChild, viewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  @ViewChild(HomeComponent) x!:HomeComponent;

  constructor(){


  }
}
