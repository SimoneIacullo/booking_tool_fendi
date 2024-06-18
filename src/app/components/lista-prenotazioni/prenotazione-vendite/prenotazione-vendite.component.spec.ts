import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneVenditeComponent } from './prenotazione-vendite.component';

describe('PrenotazioneVenditeComponent', () => {
  let component: PrenotazioneVenditeComponent;
  let fixture: ComponentFixture<PrenotazioneVenditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneVenditeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneVenditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
