import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { DialogData } from '../../../model/master-data';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { HttpRequestService } from '../../../http-request.service';

@Component({
  selector: 'app-prenotazione',
  standalone: true,
  imports: [MatButtonModule, NgStyle, PopUpComponent],
  templateUrl: './prenotazione-vendite.component.html',
  styleUrl: './prenotazione-vendite.component.scss'
})
export class PrenotazioneVenditeComponent implements OnInit {
  
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
    this.httpRequest.getEventiVendite().subscribe((result) => {
      this.prenotazioni = result;
    })
  }

  putVendite(id: number){
    this.httpRequest.putPrenotazioneVendite(id).subscribe();
  }

  checkValid(){
    return this.isValid ? "Prenotabile" : "Non prenotabile"
  }

  vediDisponibilita(){
    this.mostraGiorni = !this.mostraGiorni;
  }

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
      if (result) {
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        this.i = this.prenotazioni.findIndex(p => p.id === posti.id);
        const id = this.prenotazioni[this.i].id;
        this.putVendite(id);
      }
    });
  }

  annullaPrenotazione(): void{
    const id = this.prenotazioni[this.i].id;
    this.httpRequest.putCancellazioneVendite(id).subscribe(()=>{
      this.prenotazioneEffettuta = false;
      this.getData();
    })
  }

  aggiorna(){
    this.getData();
  }
}