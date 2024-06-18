import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneHealthComponent } from './prenotazione-health.component';

describe('PrenotazioneHealthComponent', () => {
  let component: PrenotazioneHealthComponent;
  let fixture: ComponentFixture<PrenotazioneHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
