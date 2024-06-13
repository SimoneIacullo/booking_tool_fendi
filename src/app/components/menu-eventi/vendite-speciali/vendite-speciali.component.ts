import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendite-speciali',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vendite-speciali.component.html',
  styleUrl: './vendite-speciali.component.scss'
})
export class VenditeSpecialiComponent {
  openLocation(): void {
    window.open('https://maps.app.goo.gl/exhJ1EB7sGNef33d7', '_blank');
  }
  prenotazione: string = "/prenotazione"
}
