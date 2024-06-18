import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneTrainingMultiComponent } from './prenotazione-training-multi.component';

describe('PrenotazioneTrainingMultiComponent', () => {
  let component: PrenotazioneTrainingMultiComponent;
  let fixture: ComponentFixture<PrenotazioneTrainingMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneTrainingMultiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneTrainingMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
