import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FendiCaffeComponent } from './fendi-caffe.component';

describe('FendiCaffeComponent', () => {
  let component: FendiCaffeComponent;
  let fixture: ComponentFixture<FendiCaffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FendiCaffeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FendiCaffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
