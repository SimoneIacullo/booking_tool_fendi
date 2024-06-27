import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneYogaComponent } from './prenotazione-yoga.component';

describe('PrenotazioneYogaComponent', () => {
  let component: PrenotazioneYogaComponent;
  let fixture: ComponentFixture<PrenotazioneYogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneYogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
