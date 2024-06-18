import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneCaffeComponent } from './prenotazione-caffe.component';

describe('PrenotazioneCaffeComponent', () => {
  let component: PrenotazioneCaffeComponent;
  let fixture: ComponentFixture<PrenotazioneCaffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotazioneCaffeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneCaffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
