import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneJavaComponent } from './prenotazione-java.component';

describe('PrenotazioneJavaComponent', () => {
  let component: PrenotazioneJavaComponent;
  let fixture: ComponentFixture<PrenotazioneJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneJavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
