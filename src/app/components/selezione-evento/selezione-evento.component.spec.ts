import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezioneEventoComponent } from './selezione-evento.component';

describe('SelezioneEventoComponent', () => {
  let component: SelezioneEventoComponent;
  let fixture: ComponentFixture<SelezioneEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelezioneEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelezioneEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
