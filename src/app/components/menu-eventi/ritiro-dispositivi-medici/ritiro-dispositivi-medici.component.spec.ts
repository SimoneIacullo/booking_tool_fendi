import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitiroDispositiviMediciComponent } from './ritiro-dispositivi-medici.component';

describe('RitiroDispositiviMediciComponent', () => {
  let component: RitiroDispositiviMediciComponent;
  let fixture: ComponentFixture<RitiroDispositiviMediciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitiroDispositiviMediciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RitiroDispositiviMediciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
