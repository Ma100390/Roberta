import { Routes } from '@angular/router';
import { PHomePageComponent } from './p-home-page/p-home-page.component'; 
import { PsicoterapiaComponent } from './p-servizi/p-servizi.component';
import { PContattiComponent } from './p-contatti/p-contatti.component';

import { PProgettiComponent } from './p-laboratori/p-progetti.component';
import { PAreeComponent } from './p-aree/p-aree.component';
export const routes: Routes = [
    { path: '', redirectTo: 'chi_sono_roberta_perrone', pathMatch: 'full' },
    { path: 'chi_sono_roberta_perrone', component: PHomePageComponent }, 
    { path: 'percorsi_psicoterapia', component: PsicoterapiaComponent }, 
    { path: 'progetti_psicologici', component: PProgettiComponent }, 
    { path: 'contatti_roberta_perrone', component: PContattiComponent }, 
    { path: 'aree_intervento', component: PAreeComponent }, 
    { path: '**', redirectTo: 'chi_sono_roberta_perrone' } 
  ];