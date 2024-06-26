import { Component, Inject, inject } from '@angular/core';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PopUpTrainingComponent } from '../../pop-up-training/pop-up-training.component';
import { DialogData } from '../../../model/master-data';
import { HttpRequestService } from '../../../http-request.service';

@Component({
  selector: 'app-prenotazione-training',
  standalone: true,
  imports: [MatButtonModule, NgStyle, PopUpComponent],
  templateUrl: './prenotazione-training.component.html',
  styleUrl: './prenotazione-training.component.scss'
})
export class PrenotazioneTrainingComponent {

  private httpRequest = inject(HttpRequestService);

  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  prenotazioneEffettuta: boolean = false;
  prenotazioneOggetto: any = {};
  prenotazioni: DialogData[] = [];
  i: number = 0;

  ngOnInit(): void {
    this.checkValid();
    this.getData();
  }

  getData(){
    this.httpRequest.getEventiTraining().subscribe((result) => {
      this.prenotazioni = result;
    })
  }

  putTraining(id: number){
    this.httpRequest.putPrenotazioneTraining(id).subscribe();
  }

  checkValid(){
    return this.isValid ? "Prenotabile" : "Non prenotabile"
  }

  vediDisponibilita(){
    this.mostraGiorni = !this.mostraGiorni;
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
        this.i = this.prenotazioni.findIndex(p => p.id === posti.id);
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        const id = this.prenotazioni[this.i].id;
        this.putTraining(id);
      }
    });
  }

  annullaPrenotazione(): void{
    const id = this.prenotazioni[this.i].id;
    this.httpRequest.putCancellazioneTraining(id).subscribe(()=>{
      this.prenotazioneEffettuta = false;
      this.getData();
    })
  }

  aggiorna(){
    this.getData();
  }
}
