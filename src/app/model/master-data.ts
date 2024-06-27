export interface Card {
    icona: string;
    didascalia: string;
    indirizzo: string;
    link: boolean;
}
export interface DialogData {
    id: number;
    giorno: string;
    oraInizio: string;
    oraFine: string;
    postiDisponibili: any;
}
export interface TipoEvento {
    id: number;
    nome: string;
    icon: string;
    routerLink: string;
    tipo: string;
}
export interface ModelloEvento {
    id: number;
    nome: string;
    giorno: string;
    mese: string;
    oraInizio: string;
    oraFine: string;
    posizione: string;
    img: string;
    tipo: string;
    nomeTipo: string;
    icon: string;
}
export interface Prenotazione {
    id: number;
    giorno: string;
    mese: string;
    oraInizio: string;
    oraFine: string;
    posti: string;
    nome: string;
    icon: string;
}