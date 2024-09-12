import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface TabContent {
  title: string;
  description: string;
  extraInfo?: string; // Opzionale
  list?: string[];    // Opzionale
}

interface TabContentMap {
  infanzia: TabContent;
  adolescenti: TabContent;
  adulti: TabContent;
  online: TabContent;
}

@Component({
  selector: 'app-p-servizi',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './p-servizi.component.html',
  styleUrls: ['./p-servizi.component.css']
})
export class PsicoterapiaComponent {

   // La tab attualmente selezionata
   selectedTab: keyof TabContentMap = 'infanzia';

   // Definizione dei contenuti per ogni sezione
   tabContent: TabContentMap = {
     infanzia: {
       title: 'Psicoterapia per l\'Infanzia',
       description: 'La psicoterapia per bambini aiuta i più piccoli a esprimere e comprendere le loro emozioni.',
       extraInfo: 'L\'intervento può includere terapia del gioco, attività creative e molto altro.',
       list: [
         'Miglioramento dell’autostima',
         'Gestione delle emozioni',
         'Sviluppo di abilità sociali'
       ]
     },
     adolescenti: {
       title: 'Psicoterapia per Adolescenti',
       description: 'Gli adolescenti affrontano molte sfide e la psicoterapia può aiutarli a navigare questa fase della vita.',
       extraInfo: 'Si possono affrontare problematiche come ansia, depressione, difficoltà scolastiche.',
       list: [
         'Sostegno emotivo',
         'Miglioramento delle capacità relazionali',
         'Sviluppo dell’indipendenza'
       ]
     },
     adulti: {
       title: 'Psicoterapia per Adulti',
       description: 'La psicoterapia per adulti si concentra su una vasta gamma di problematiche come lo stress e le relazioni.',
       extraInfo: 'Si esplorano soluzioni per la crescita personale e il benessere.',
       list: [
         'Gestione dello stress',
         'Elaborazione di traumi',
         'Sviluppo della consapevolezza'
       ]
     },
     online: {
       title: 'Psicoterapia Online',
       description: 'La psicoterapia online è un modo conveniente e accessibile per ricevere supporto emotivo.',
       extraInfo: 'Offre flessibilità oraria e geografica, mantenendo la stessa efficacia della terapia in presenza.',
       list: [
         'Comodità da casa',
         'Flessibilità oraria',
         'Accessibilità'
       ]
     }
   };
 
   // Ottieni le chiavi delle tab per iterazione
   get tabKeys(): Array<keyof TabContentMap> {
     return Object.keys(this.tabContent) as Array<keyof TabContentMap>;
   }
 
   // Funzione per cambiare la tab selezionata
   selectTab(tab: keyof TabContentMap) {
     this.selectedTab = tab;
   }
 }