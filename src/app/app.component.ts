import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TitoloComponent } from "./components/titolo/titolo.component";
import { EventiComponent } from "./components/eventi/eventi.component";
import { SelezioneEventoComponent } from './components/selezione-evento/selezione-evento.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, TitoloComponent, EventiComponent, RouterLink, SelezioneEventoComponent]
})
export class AppComponent {
  title = 'fendi';
}
