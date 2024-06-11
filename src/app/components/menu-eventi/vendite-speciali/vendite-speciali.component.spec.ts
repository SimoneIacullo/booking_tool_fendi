import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenditeSpecialiComponent } from './vendite-speciali.component';

describe('VenditeSpecialiComponent', () => {
  let component: VenditeSpecialiComponent;
  let fixture: ComponentFixture<VenditeSpecialiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenditeSpecialiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenditeSpecialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
