import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneConfermataComponent } from './prenotazione-confermata.component';

describe('PrenotazioneConfermataComponent', () => {
  let component: PrenotazioneConfermataComponent;
  let fixture: ComponentFixture<PrenotazioneConfermataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneConfermataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneConfermataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
