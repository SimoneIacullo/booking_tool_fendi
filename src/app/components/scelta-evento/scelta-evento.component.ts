import { Component, inject } from '@angular/core';
import { ModelloEvento } from '../../model/master-data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-scelta-evento',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './scelta-evento.component.html',
  styleUrl: './scelta-evento.component.scss'
})
export class SceltaEventoComponent {
  evento: ModelloEvento[] | undefined;
  icon: string | undefined;
  nomeTipo: string | undefined;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.evento = this.route.snapshot.data['eventi'];
    console.log(this.evento);
    this.icon = this.evento![0].icon;
    this.nomeTipo = this.evento![0].nomeTipo;
  }
  openLocation(position: string): void {
    window.open(position, '_blank');
  }
}
