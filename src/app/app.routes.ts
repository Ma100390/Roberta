import { Routes } from '@angular/router';
import { PHomePageComponent } from './p-home-page/p-home-page.component'; 
import { PServiziComponent } from './p-servizi/p-servizi.component';
import { CFiloComponent } from './c-filo/c-filo.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PHomePageComponent }, 
    { path: 'servizi', component: PServiziComponent }, 
    { path: 'about', component: CFiloComponent }, 
    { path: '**', redirectTo: '/home' } 
  ];