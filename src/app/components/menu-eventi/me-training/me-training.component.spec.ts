import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeTrainingComponent } from './me-training.component';

describe('MeTrainingComponent', () => {
  let component: MeTrainingComponent;
  let fixture: ComponentFixture<MeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
