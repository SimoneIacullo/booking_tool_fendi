import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../model/master-data';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  readonly dialogRef = inject(MatDialogRef<PopUpComponent>);
  readonly data = inject<{posti: DialogData}>(MAT_DIALOG_DATA);
  onClose(): void {
    this.dialogRef.close();
  }
  conferma(result: boolean): void {
    this.dialogRef.close(result);
  }
}
