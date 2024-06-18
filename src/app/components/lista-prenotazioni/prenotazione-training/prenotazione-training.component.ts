import { Component, inject } from '@angular/core';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PopUpTrainingComponent } from '../../pop-up-training/pop-up-training.component';

@Component({
  selector: 'app-prenotazione-training',
  standalone: true,
  imports: [MatButtonModule, NgStyle, PopUpComponent],
  templateUrl: './prenotazione-training.component.html',
  styleUrl: './prenotazione-training.component.scss'
})
export class PrenotazioneTrainingComponent {
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
  prenotazione: any = {
    giorno: "52 Agosto",
    oraInizio: "09:30",
    oraFine: "13:30",
    postiDisponibili: 10
  }
  getCursor(posti: number): string{
    return posti>0 ? "pointer" : "cursor"
  }
  prenota(posti: any){
    if(posti.postiDisponibili > 0){
      this.openDialog(posti);
    }
  }

  readonly dialog = inject(MatDialog);
  openDialog(posti: any): void {
    const dialogRef = this.dialog.open(PopUpTrainingComponent, {
      data: {"posti": posti}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.prenotazione.postiDisponibili = this.prenotazione.postiDisponibili - result;
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
      }
    });
  }
  annullaPrenotazione(): void{
    this.prenotazioneEffettuta = false;
    this.prenotazione.postiDisponibili = this.prenotazione.postiDisponibili + 1;
  }
  aggiorna(){
    this.ngOnInit();
  }
}
