import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMultiComponent } from './training-multi.component';

describe('TrainingMultiComponent', () => {
  let component: TrainingMultiComponent;
  let fixture: ComponentFixture<TrainingMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingMultiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
