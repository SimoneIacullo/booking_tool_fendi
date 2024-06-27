import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-popup-cena',
  standalone: true,
  imports: [MatButton, MatInput, FormsModule, MatFormField],
  templateUrl: './popup-cena.component.html',
  styleUrl: './popup-cena.component.scss'
})
export class PopupCenaComponent {
  readonly dialogRef = inject(MatDialogRef<PopupCenaComponent>);
  readonly data = inject<{posti: any}>(MAT_DIALOG_DATA);
  inputValue: string = "";
  n: number = 1;
  onClose(): void {
    this.dialogRef.close();
  }
  conferma(): void {
    const data = {nome: this.inputValue, n: this.n}
    this.dialogRef.close(data);
  }
  decremento(){
    return this.n > 1 ? this.n -- : this.n;
  }
  aumento(){
    return this.n < 10 ? this.n ++ : this.n;
  }
}
