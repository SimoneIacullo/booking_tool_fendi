import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TitoloComponent } from "./components/titolo/titolo.component";
import { EventiComponent } from "./components/eventi/eventi.component";
import { VenditeSpecialiComponent } from './components/menu-eventi/vendite-speciali/vendite-speciali.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, TitoloComponent, EventiComponent, VenditeSpecialiComponent, RouterLink]
})
export class AppComponent {
  title = 'fendi';
}
