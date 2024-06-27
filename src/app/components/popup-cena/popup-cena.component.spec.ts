import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCenaComponent } from './popup-cena.component';

describe('PopupCenaComponent', () => {
  let component: PopupCenaComponent;
  let fixture: ComponentFixture<PopupCenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupCenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
