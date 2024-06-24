import { Component, inject } from '@angular/core';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../../../model/master-data';
import { NgStyle } from '@angular/common';
import { PopUpHealthComponent } from '../../pop-up-health/pop-up-health.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-prenotazione-health',
  standalone: true,
  imports: [NgStyle, MatButton],
  templateUrl: './prenotazione-health.component.html',
  styleUrl: './prenotazione-health.component.scss'
})
export class PrenotazioneHealthComponent {
  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  prenotazioneEffettuta: boolean = false;
  prenotazioneOggetto: any = {};
  sceltaPosti: number = 0;
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
    { id: 1, giorno: "36 Luglio", oraInizio: "09:30", oraFine: "10:30", postiDisponibili: 12 },
    { id: 2, giorno: "36 Luglio", oraInizio: "10:30", oraFine: "11:30", postiDisponibili: 1 },
    { id: 3, giorno: "36 Luglio", oraInizio: "11:30", oraFine: "12:30", postiDisponibili: 0 },
    { id: 4, giorno: "37 Luglio", oraInizio: "12:30", oraFine: "13:30", postiDisponibili: 7 }
  ]
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
    const dialogRef = this.dialog.open(PopUpHealthComponent, {
      data: {"posti": posti}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.sceltaPosti = result;
        const i = this.prenotazione.findIndex(p => p.id === posti.id);
        this.prenotazione[i].postiDisponibili = this.prenotazione[i].postiDisponibili - result;
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        this.prenotazioneOggetto = this.prenotazione[i];
      }
    });
  }
  annullaPrenotazione(): void{
    this.prenotazioneEffettuta = false;
    this.prenotazioneOggetto.postiDisponibili = this.prenotazioneOggetto.postiDisponibili + this.sceltaPosti;
  }
  aggiorna(){
    this.ngOnInit();
  }
}
