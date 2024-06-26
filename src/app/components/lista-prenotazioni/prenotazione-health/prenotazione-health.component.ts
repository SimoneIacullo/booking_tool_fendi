import { Component, inject } from '@angular/core';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../../../model/master-data';
import { NgStyle } from '@angular/common';
import { PopUpHealthComponent } from '../../pop-up-health/pop-up-health.component';
import { MatButton } from '@angular/material/button';
import { HttpRequestService } from '../../../http-request.service';

@Component({
  selector: 'app-prenotazione-health',
  standalone: true,
  imports: [NgStyle, MatButton],
  templateUrl: './prenotazione-health.component.html',
  styleUrl: './prenotazione-health.component.scss'
})
export class PrenotazioneHealthComponent {
  
  private httpRequest = inject(HttpRequestService);
  
  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  prenotazioneEffettuta: boolean = false;
  prenotazioneOggetto: any = {};
  sceltaPosti: number = 0;
  prenotazioni: DialogData[] = [];
  i: number = 0;

  ngOnInit(): void {
    this.checkValid();
    this.getData();
  }

  getData(){
    this.httpRequest.getEventiHealth().subscribe((result) => {
      this.prenotazioni = result;
    })
  }
  
  putHealth(id: number, n: number){
    this.httpRequest.putPrenotazioneHealth(id, n).subscribe();
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
    const dialogRef = this.dialog.open(PopUpHealthComponent, {
      data: {"posti": posti}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.sceltaPosti = result;
        this.i = this.prenotazioni.findIndex(p => p.id === posti.id);
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        const id = this.prenotazioni[this.i].id;
        this.putHealth(id, result);
      }
    });
  }
  
  annullaPrenotazione(): void{
    const id = this.prenotazioni[this.i].id;
    const n = this.sceltaPosti;
    this.httpRequest.putCancellazioneHealth(id, n).subscribe(()=>{
      this.prenotazioneEffettuta = false;
      this.getData();
    })
  }
  
  aggiorna(){
    this.getData();
  }
}
