import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapedashboardComponent } from './rodapedashboard.component';

describe('RodapedashboardComponent', () => {
  let component: RodapedashboardComponent;
  let fixture: ComponentFixture<RodapedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapedashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
