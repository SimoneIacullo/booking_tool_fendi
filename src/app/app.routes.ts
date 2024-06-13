import { Routes } from '@angular/router';
import { VenditeSpecialiComponent } from './components/menu-eventi/vendite-speciali/vendite-speciali.component';
import { EventiComponent } from './components/eventi/eventi.component';
import { TrainingComponent } from './components/menu-eventi/training/training.component';
import { HealthSafetyComponent } from './components/menu-eventi/health-safety/health-safety.component';
import { FendiCaffeComponent } from './components/menu-eventi/fendi-caffe/fendi-caffe.component';
import { TrainingMultiComponent } from './components/menu-eventi/training-multi/training-multi.component';
import { MeTrainingComponent } from './components/menu-eventi/me-training/me-training.component';
import { MeVisiteComponent } from './components/menu-eventi/me-visite/me-visite.component';
import { RitiroDispositiviMediciComponent } from './components/menu-eventi/ritiro-dispositivi-medici/ritiro-dispositivi-medici.component';
import { TestCovidComponent } from './components/menu-eventi/test-covid/test-covid.component';
import { PrenotazioneComponent } from './components/prenotazione/prenotazione.component';

export const routes: Routes = [
  { path: '', component: EventiComponent },
  { path: 'vendite_speciali', component: VenditeSpecialiComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'health_safety', component: HealthSafetyComponent },
  { path: 'fendi_caffe', component: FendiCaffeComponent },
  { path: 'training_multi', component: TrainingMultiComponent },
  { path: 'me_training', component: MeTrainingComponent },
  { path: 'me_visite', component: MeVisiteComponent },
  { path: 'ritiro_dispositivi_medici', component: RitiroDispositiviMediciComponent },
  { path: 'test_covid', component: TestCovidComponent },
  { path: 'prenotazione', component: PrenotazioneComponent },
];
