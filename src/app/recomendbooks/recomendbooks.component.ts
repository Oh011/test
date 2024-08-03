import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-recomendbooks',
  standalone: true,
  imports: [],
  templateUrl: './recomendbooks.component.html',
  styleUrl: './recomendbooks.component.css'
})
export class RecomendbooksComponent {


  
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
}
