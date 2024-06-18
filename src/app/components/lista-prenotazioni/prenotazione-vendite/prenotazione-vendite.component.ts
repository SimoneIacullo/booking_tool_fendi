import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { DialogData } from '../../../model/master-data';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';

@Component({
  selector: 'app-prenotazione',
  standalone: true,
  imports: [MatButtonModule, NgStyle, PopUpComponent],
  templateUrl: './prenotazione-vendite.component.html',
  styleUrl: './prenotazione-vendite.component.scss'
})
export class PrenotazioneVenditeComponent implements OnInit {
  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  prenotazioneEffettuta: boolean = false;
  prenotazioneOggetto: any = {};
  ngOnInit(): void {
    this.checkValid();
  }
  checkValid(){
    return this.isValid ? "Prenotabile" : "Non prenotabile"
  }
  vediDisponibilita(){
    this.mostraGiorni = !this.mostraGiorni;
  }
  prenotazione: DialogData[] = [
    { id: 1, giorno: "36 Luglio", oraInizio: "09:30", oraFine: "10:30", postiDisponibili: true },
    { id: 2, giorno: "36 Luglio", oraInizio: "10:30", oraFine: "11:30", postiDisponibili: false },
    { id: 3, giorno: "36 Luglio", oraInizio: "11:30", oraFine: "12:30", postiDisponibili: false },
    { id: 4, giorno: "37 Luglio", oraInizio: "12:30", oraFine: "13:30", postiDisponibili: true }
  ]
  getPosti(posti: boolean): string{
    return posti ? "green" : "red"
  }
  getCursor(posti: boolean): string{
    return posti ? "pointer" : "cursor"
  }
  prenota(posti: any){
    if(posti.postiDisponibili){
      this.openDialog(posti);
    }
  }

  readonly dialog = inject(MatDialog);
  openDialog(posti: any): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: {"posti": posti}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const i = this.prenotazione.findIndex(p => p.id === posti.id);
        this.prenotazione[i].postiDisponibili = result;
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        this.prenotazioneOggetto = this.prenotazione[i];
      }
    });
  }
  annullaPrenotazione(): void{
    this.prenotazioneEffettuta = false;
    this.prenotazioneOggetto.postiDisponibili = true;
  }
  aggiorna(){
    this.ngOnInit();
  }
}