import { Component } from '@angular/core';
import { Card } from '../../model/master-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eventi',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.scss'
})
export class EventiComponent {
  cards: Card[] = [
    { icona: "shopping_bag", didascalia: "Vendite Speciali", indirizzo: "/vendite_speciali" },
    { icona: "psychology_alt", didascalia: "Training", indirizzo: "/training" },
    { icona: "health_and_safety", didascalia: "Health & Safety", indirizzo: "/health_safety" },
    { icona: "local_cafe", didascalia: "Fendi Caffè", indirizzo: "/fendi_caffe" },
    { icona: "psychology", didascalia: "Training Multi Slot", indirizzo: "/training_multi" },
    { icona: "flatware", didascalia: "MINDFUL EATING - Training", indirizzo: "/me_training" },
    { icona: "dining", didascalia: "MINDFUL EATING - Visite individuali di nutrizione", indirizzo: "/me_visite" },
    { icona: "medical_services", didascalia: "Ritiro dispositivi medici", indirizzo: "/ritiro_dispositivi_medici" },
    { icona: "vaccines", didascalia: "Test Antigenico Covid-19", indirizzo: "/test_covid" }
  ]
}
