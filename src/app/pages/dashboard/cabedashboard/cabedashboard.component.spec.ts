import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabedashboardComponent } from './cabedashboard.component';

describe('CabedashboardComponent', () => {
  let component: CabedashboardComponent;
  let fixture: ComponentFixture<CabedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabedashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
