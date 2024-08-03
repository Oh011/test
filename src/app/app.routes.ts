import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { OldproductsComponent } from './oldproducts/oldproducts.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import path from 'path';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [


    {path:"" , redirectTo:"Home" , pathMatch:"full"},
    {path:"Home" , component:HomeComponent},
    {path:"About" , component:AboutComponent},
    {path:"products", component:ProductsComponent , children:[


        {path:"" , redirectTo:"old" , pathMatch:"full"},
        {path:"old",component:OldproductsComponent},
        {path:"new",component:NewproductsComponent}
    ]},


    {path:"**",component:NotfoundComponent , title:"kaka"}
];


//config

// prefix starts with the word