import { Component, inject } from '@angular/core';
import { HttpRequestService } from '../../../http-request.service';
import { MatDialog } from '@angular/material/dialog';
import { PrenotazioneConfermataComponent } from '../prenotazione-confermata/prenotazione-confermata.component';
import { PopupCenaComponent } from '../../popup-cena/popup-cena.component';
import { Prenotazione } from '../../../model/master-data';
import { NgStyle } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prenotazione-cena',
  standalone: true,
  imports: [NgStyle, MatButton],
  templateUrl: './prenotazione-cena.component.html',
  styleUrl: './prenotazione-cena.component.scss'
})
export class PrenotazioneCenaComponent {
  
  private route = inject(ActivatedRoute);
  private httpRequest = inject(HttpRequestService);
  
  isValid: boolean = true;
  mostraGiorni: boolean = false;
  showPopUp: boolean = false;
  prenotazioneEffettuta: boolean = false;
  sceltaPosti: number = 0;
  prenotazioni: Prenotazione[] = [];
  i: number = 0;
  id: number | undefined;
  icon: string | undefined;
  nome: string | undefined;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.httpRequest.getPrenotazione(this.route.snapshot.params["id"]).subscribe((result) => {
      this.prenotazioni = result;
      this.icon = this.prenotazioni![0].icon;
      this.nome = this.prenotazioni![0].nome;
    })
  }

  /*
  putHealth(id: number, n: number){
    this.httpRequest.putPrenotazioneHealth(id, n).subscribe();
  }
  */
  
  vediDisponibilita(){
    this.mostraGiorni = !this.mostraGiorni;
  }
  
  
  prenota(posti: any){
      this.openDialog(posti);
  }

  readonly dialog = inject(MatDialog);
  openDialog(posti: any): void {
    const dialogRef = this.dialog.open(PopupCenaComponent, {
      data: {"posti": posti}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
        /*
        this.sceltaPosti = result;
        this.i = this.prenotazioni.findIndex(p => p.id === posti.id);
        this.dialog.open(PrenotazioneConfermataComponent);
        this.prenotazioneEffettuta = true;
        /*const id = this.prenotazioni[this.i].id;
        this.putHealth(id, result);*/
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
