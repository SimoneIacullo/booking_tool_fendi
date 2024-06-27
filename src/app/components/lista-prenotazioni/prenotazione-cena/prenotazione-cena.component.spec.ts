import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneCenaComponent } from './prenotazione-cena.component';

describe('PrenotazioneCenaComponent', () => {
  let component: PrenotazioneCenaComponent;
  let fixture: ComponentFixture<PrenotazioneCenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneCenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
