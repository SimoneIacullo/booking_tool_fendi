import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-training',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pop-up-training.component.html',
  styleUrl: './pop-up-training.component.scss'
})
export class PopUpTrainingComponent {
  readonly dialogRef = inject(MatDialogRef<PopUpTrainingComponent>);
  readonly data = inject<{posti: any}>(MAT_DIALOG_DATA);
  onClose(): void {
    this.dialogRef.close();
  }
  conferma(result: number): void {
    this.dialogRef.close(result);
  }
}
