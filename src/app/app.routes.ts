import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"industry",component:IndustryComponent},
    {path:"contact",component:ContactComponent},
    {path:"service",component:ServiceComponent}
];
