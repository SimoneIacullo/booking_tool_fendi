import { NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-selezione-evento',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './selezione-evento.component.html',
  styleUrl: './selezione-evento.component.scss'
})
export class SelezioneEventoComponent implements OnInit {

  private route = inject(ActivatedRoute);

  icona: string | undefined;
  titolo: string | undefined;
  nome: string | undefined;
  giorno: string | undefined;
  mese: string | undefined;
  orario: string | undefined;
  posizione: string | undefined;
  prenotazione: string | undefined;
  img_url: string | undefined;

  ngOnInit(): void {
    this.icona = this.route.snapshot.data['icona'];
    this.titolo = this.route.snapshot.data['titolo'];
    this.nome = this.route.snapshot.data['nome'];
    this.giorno = this.route.snapshot.data['giorno'];
    this.mese = this.route.snapshot.data['mese'];
    this.orario = this.route.snapshot.data['orario'];
    this.posizione = this.route.snapshot.data['posizione'];
    this.prenotazione = this.route.snapshot.data['link'];
    this.img_url = this.route.snapshot.data['img_url'];
  }

  openLocation(): void {
    window.open("posizione", '_blank');
  }
}
