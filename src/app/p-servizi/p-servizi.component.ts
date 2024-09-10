import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-p-servizi',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './p-servizi.component.html',
  styleUrl: './p-servizi.component.css'
})
export class PServiziComponent {
  faqItems = [
    {
      question: "Che differenza c’è tra Psicologo, Psicoterapeuta, Psichiatra, Psicanalista e Neurologo?",
      answer: "Il psicologo è un professionista laureato in psicologia, mentre il psicoterapeuta è uno psicologo o un medico che ha completato una specializzazione in psicoterapia. Lo psichiatra è un medico che si occupa della diagnosi e del trattamento dei disturbi mentali e può prescrivere farmaci. Il psicanalista segue il metodo psicoanalitico freudiano, mentre il neurologo è un medico specializzato nel sistema nervoso centrale e periferico.",
      showAnswer: false
    },
    {
      question: "Come faccio a capire se ho un disagio psicologico?",
      answer: "Segnali come ansia persistente, difficoltà nelle relazioni, depressione, insonnia o malessere generale possono essere indicativi di un disagio psicologico. Se questi sintomi interferiscono con la tua vita quotidiana, è consigliabile rivolgersi a uno specialista.",
      showAnswer: false
    },
    {
      question: "Perché dovrei portare mio figlio dallo psicologo?",
      answer: "Se noti cambiamenti comportamentali, emotivi o scolastici in tuo figlio, uno psicologo può aiutarlo a capire e gestire le sue emozioni e difficoltà, migliorando il suo benessere emotivo e sociale.",
      showAnswer: false
    },
    {
      question: "Come funziona la psicoterapia?",
      answer: "La psicoterapia è un percorso durante il quale il paziente lavora con un terapeuta per esplorare pensieri, emozioni e comportamenti, con l'obiettivo di migliorare la qualità della vita e affrontare problematiche psicologiche.",
      showAnswer: false
    },
    {
      question: "Quanto dura una psicoterapia?",
      answer: "La durata della psicoterapia varia a seconda del tipo di terapia e delle esigenze del paziente. Può durare da pochi mesi a diversi anni.",
      showAnswer: false
    },
    {
      question: "Qual è il miglior metodo di psicoterapia?",
      answer: "Non esiste un metodo 'migliore' in assoluto, dipende dalle problematiche del paziente e dalle preferenze individuali. Terapie comuni includono la terapia cognitivo-comportamentale, l'analisi transazionale e la psicoanalisi.",
      showAnswer: false
    }
  ];

  toggleAnswer(item: any) {
    item.showAnswer = !item.showAnswer;
  }

}
