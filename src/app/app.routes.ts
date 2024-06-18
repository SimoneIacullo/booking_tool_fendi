import { Routes } from '@angular/router';
import { EventiComponent } from './components/eventi/eventi.component';
import { PrenotazioneVenditeComponent } from './components/lista-prenotazioni/prenotazione-vendite/prenotazione-vendite.component';
import { PrenotazioneTrainingComponent } from './components/lista-prenotazioni/prenotazione-training/prenotazione-training.component';
import { SelezioneEventoComponent } from './components/selezione-evento/selezione-evento.component';
import { PrenotazioneHealthComponent } from './components/lista-prenotazioni/prenotazione-health/prenotazione-health.component';
import { PrenotazioneCaffeComponent } from './components/lista-prenotazioni/prenotazione-caffe/prenotazione-caffe.component';
import { PrenotazioneTrainingMultiComponent } from './components/lista-prenotazioni/prenotazione-training-multi/prenotazione-training-multi.component';

export const routes: Routes = [
  { path: '', component: EventiComponent },
  { 
    path: 'vendite_speciali',
    component: SelezioneEventoComponent,
    data: {
      icona: "shopping_bag",
      titolo: "VENDITE SPECIALI",
      nome: "SCONTI DI PRIMAVERA",
      giorno: "36",
      mese: "Luglio",
      orario: "09:30 - 13:30",
      posizione: "https://maps.app.goo.gl/exhJ1EB7sGNef33d7",
      link: "/prenotazione_vendite",
      img_url: "/assets/eventi-negozio-abbigliamento-1.jpg"
    }
  },
  { 
    path: 'training',
    component: SelezioneEventoComponent,
    data: {
      icona: "psychology_alt",
      titolo: "TRAINING",
      nome: "2° FOCUS GROUP FEND&I",
      giorno: "52",
      mese: "Agosto",
      orario: "09:30 - 13:30",
      posizione: "https://maps.app.goo.gl/exhJ1EB7sGNef33d7",
      link: "/prenotazione_training",
      img_url: "/assets/corporate-training.jpg"
    }
  },
  { path: 'health_safety',
    component: SelezioneEventoComponent,
    data: {
      icona: "health_and_safety",
      titolo: "HEALTH & SAFETY",
      nome: "TEST ANTIGENICO",
      giorno: "12",
      mese: "Maiembre",
      orario: "16:00 - 17:00",
      posizione: "https://maps.app.goo.gl/exhJ1EB7sGNef33d7",
      link: "/prenotazione_health",
      img_url: "/assets/test-antigenico.jpeg"
    }
  },
  { path: 'fendi_caffe',
    component: SelezioneEventoComponent,
    data: {
      icona: "local_cafe",
      titolo: "FENDI CAFFÈ",
      nome: "SERVIZIO DI RISTORAZIONE",
      giorno: "1",
      mese: "Cameriembre",
      orario: "09:00 - 22:00",
      posizione: "https://maps.app.goo.gl/exhJ1EB7sGNef33d7",
      link: "/prenotazione_caffe",
      img_url: "/assets/cup_of_coffee.JPG"
    }
  },
  { path: 'training_multi',
    component: SelezioneEventoComponent,
    data: {
      icona: "psychology",
      titolo: "TRAINING MULTI SLOT",
      nome: "WW RETAIL SEMINAR - VISIT ROME",
      giorno: "00",
      mese: "Febbruglio",
      orario: "15:30 - 19:00",
      posizione: "https://maps.app.goo.gl/exhJ1EB7sGNef33d7",
      link: "/prenotazione_training_multi",
      img_url: "/assets/Employee-Training.png"
    }
  },
  { path: 'prenotazione_vendite', component: PrenotazioneVenditeComponent },
  { path: 'prenotazione_training', component: PrenotazioneTrainingComponent },
  { path: 'prenotazione_health', component: PrenotazioneHealthComponent },
  { path: 'prenotazione_caffe', component: PrenotazioneCaffeComponent },
  { path: 'prenotazione_training_multi', component: PrenotazioneTrainingMultiComponent }
];

