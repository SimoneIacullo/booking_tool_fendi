import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  @Output() close = new EventEmitter<void>();
  closePopUp() {
    this.close.emit();
  }
  conferma(){
    
  }
}
