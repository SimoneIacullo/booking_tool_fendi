import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneTrainingComponent } from './prenotazione-training.component';

describe('PrenotazioneTrainingComponent', () => {
  let component: PrenotazioneTrainingComponent;
  let fixture: ComponentFixture<PrenotazioneTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
