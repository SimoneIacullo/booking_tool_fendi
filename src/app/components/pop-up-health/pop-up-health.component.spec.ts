import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHealthComponent } from './pop-up-health.component';

describe('PopUpHealthComponent', () => {
  let component: PopUpHealthComponent;
  let fixture: ComponentFixture<PopUpHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
