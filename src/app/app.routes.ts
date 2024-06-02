import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
    {path:'mbi' ,component: AcceuilComponent},
    {path:'' ,redirectTo:'mbi' ,pathMatch:'full'}
];
