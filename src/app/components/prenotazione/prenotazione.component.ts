import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-prenotazione',
  standalone: true,
  imports: [MatButtonModule, NgIf, NgStyle, PopUpComponent],
  templateUrl: './prenotazione.component.html',
  styleUrl: './prenotazione.component.scss'
})
export class PrenotazioneComponent implements OnInit {
  disponibile: string | undefined;
  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  ngOnInit(): void {
    this.checkValid();
  }
  checkValid(){
    return this.isValid ? "Prenotabile" : "Non prenotabile"
  }
  vediDisponibilita(){
    this.mostraGiorni = !this.mostraGiorni;
  }
  prenotazione: any[] = [
    { data: "36 Luglio", oraInizio: "09:30", oraFine: "10:30", postiDisponibili: true },
    { data: "36 Luglio", oraInizio: "10:30", oraFine: "11:30", postiDisponibili: false },
    { data: "36 Luglio", oraInizio: "11:30", oraFine: "12:30", postiDisponibili: false },
    { data: "36 Luglio", oraInizio: "12:30", oraFine: "13:30", postiDisponibili: true }
  ]
  getPosti(posti: boolean): string{
    return posti ? "green" : "red"
  }
  getCursor(posti: boolean): string{
    return posti ? "pointer" : "cursor"
  }
  prenota(posti: boolean){
    if(posti){
      this.showPopUp = true;
    }
  }
  closePopUp() {
    this.showPopUp = false;
  }
}
