import { Routes } from '@angular/router';
import { PHomePageComponent } from './p-home-page/p-home-page.component'; 
import { PsicoterapiaComponent } from './p-servizi/p-servizi.component';
import { PContattiComponent } from './p-contatti/p-contatti.component';
import { MetaResolver } from './meta-resolver.service';
import { PProgettiComponent } from './p-laboratori/p-progetti.component';
import { PAreeComponent } from './p-aree/p-aree.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chi_sono_roberta_perrone', pathMatch: 'full' },
  
  { 
    path: 'chi_sono_roberta_perrone', 
    component: PHomePageComponent,
    resolve: { meta: MetaResolver },
    data: { 
      title: 'Chi sono - Roberta Perrone', 
      description: 'Scopri chi è Roberta Perrone e la sua esperienza professionale come psicoterapeuta.' 
    }
  },

  { 
    path: 'percorsi_psicoterapia', 
    component: PsicoterapiaComponent,
    resolve: { meta: MetaResolver },
    data: { 
      title: 'Percorsi di Psicoterapia - Roberta Perrone', 
      description: 'Esplora i percorsi di psicoterapia offerti da Roberta Perrone per il benessere mentale.' 
    }
  },

  { 
    path: 'progetti_psicologici', 
    component: PProgettiComponent,
    resolve: { meta: MetaResolver },
    data: { 
      title: 'Progetti Psicologici - Roberta Perrone', 
      description: 'Scopri i progetti psicologici di Roberta Perrone per la promozione del benessere psicofisico.' 
    }
  },

  { 
    path: 'contatti_roberta_perrone', 
    component: PContattiComponent,
    resolve: { meta: MetaResolver },
    data: { 
      title: 'Contatti - Roberta Perrone', 
      description: 'Contatta Roberta Perrone per maggiori informazioni sui servizi di psicoterapia.' 
    }
  },

  { 
    path: 'aree_intervento', 
    component: PAreeComponent,
    resolve: { meta: MetaResolver },
    data: { 
      title: 'Aree di Intervento - Roberta Perrone', 
      description: 'Scopri le aree di intervento di Roberta Perrone per il supporto psicologico.' 
    }
  },

  { path: '**', redirectTo: 'chi_sono_roberta_perrone' }
];
