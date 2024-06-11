import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeVisiteComponent } from './me-visite.component';

describe('MeVisiteComponent', () => {
  let component: MeVisiteComponent;
  let fixture: ComponentFixture<MeVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeVisiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
