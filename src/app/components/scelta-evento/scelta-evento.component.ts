import { Component, inject } from '@angular/core';
import { ModelloEvento } from '../../model/master-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scelta-evento',
  standalone: true,
  imports: [],
  templateUrl: './scelta-evento.component.html',
  styleUrl: './scelta-evento.component.scss'
})
export class SceltaEventoComponent {
  evento: ModelloEvento[] | undefined;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.evento = this.route.snapshot.data['eventi'];
  }
  openLocation(position: string): void {
    window.open(position, '_blank');
  }
}
