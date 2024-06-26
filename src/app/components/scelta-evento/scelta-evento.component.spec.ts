import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaEventoComponent } from './scelta-evento.component';

describe('SceltaEventoComponent', () => {
  let component: SceltaEventoComponent;
  let fixture: ComponentFixture<SceltaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceltaEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceltaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
