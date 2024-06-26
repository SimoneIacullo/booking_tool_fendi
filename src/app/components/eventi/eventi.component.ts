import { Component, inject } from '@angular/core';
import { Card } from '../../model/master-data';
import { RouterLink } from '@angular/router';
import { HttpRequestService } from '../../http-request.service';

@Component({
  selector: 'app-eventi',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.scss'
})
export class EventiComponent {

  private httpRequest = inject(HttpRequestService);
  eventi: any;

  ngOnInit(): void {
    this.getListaEventi();
  }

  getListaEventi(){
    this.httpRequest.getTipoEvento().subscribe((result)=>{
      this.eventi = result;
    });
  }


  cards: Card[] = [
    { icona: "shopping_bag", didascalia: "Vendite Speciali", indirizzo: "/vendite_speciali", link: false },
    { icona: "psychology_alt", didascalia: "Training", indirizzo: "/training", link: false },
    { icona: "health_and_safety", didascalia: "Health & Safety", indirizzo: "/health_safety", link: false },
    { icona: "flatware", didascalia: "MINDFUL EATING - Training", indirizzo: "https://outlook.office365.com/book/Fendi1@unicampus365.onmicrosoft.com/", link: true },
    { icona: "dining", didascalia: "MINDFUL EATING - Visite individuali di nutrizione", indirizzo: "https://outlook.office365.com/book/MINDFULEATINGCopia@unicampus365.onmicrosoft.com/", link: true },
    { icona: "vaccines", didascalia: "Test Antigenico Covid-19", indirizzo: "https://outlook.office365.com/book/TamponiFendiFebbraio@unicampus365.onmicrosoft.com/", link: true }
  ]
}