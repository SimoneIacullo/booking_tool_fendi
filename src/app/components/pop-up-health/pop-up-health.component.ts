import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-health',
  standalone: true,
  imports: [MatButton],
  templateUrl: './pop-up-health.component.html',
  styleUrl: './pop-up-health.component.scss'
})
export class PopUpHealthComponent {
  readonly dialogRef = inject(MatDialogRef<PopUpHealthComponent>);
  readonly data = inject<{posti: any}>(MAT_DIALOG_DATA);
  n: number = 1;
  onClose(): void {
    this.dialogRef.close();
  }
  conferma(result: number): void {
    this.dialogRef.close(result);
  }
  decremento(){
    return this.n > 1 ? this.n -- : this.n;
  }
  aumento(){
    return this.n < this.data.posti.postiDisponibili ? this.n ++ : this.n;
  }
}
