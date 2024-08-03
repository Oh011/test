import { Iproduct } from './../iproduct';
import { NgFor, NgIf } from '@angular/common';
import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { copyFileSync } from 'fs';
import { BookproComponent } from '../bookpro/bookpro.component';






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , NgFor , NgIf , BookproComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnChanges , OnInit {


  @Input()testvar!:string;

  test:string="omar";

  inp:string="";



  data:Iproduct[]=[{title:"DataBase",img:"assets/imgs/database.jpeg",descpretion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, id?"
    , isborrowed:true, nums:[5,6,7,8]
  },

    {title:"Europe",img:"assets/imgs/b9.jpg",descpretion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, id?",
      isborrowed:false,nums:[5,6,7,8]
    },

    {title:"Europe",img:"assets/imgs/b6.jpg",descpretion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, id?",
      isborrowed:true,nums:[5,6,7,8]
    },

    {title:"Data structres and algo",img:"assets/imgs/b6.jpg",descpretion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, id?",
      isborrowed:false,nums:[5,6,7,8]
    },




  ]


  change(x:Event):void{

    this.data[0].title="kaka";
    console.log(this.data)
    console.log(x)


  }


  ngOnChanges(changes: SimpleChanges): void {
     
    console.log("pop")
  }


 ngOnInit(): void {
     console.log("started")
 

     var x=22;
  
 }

}
