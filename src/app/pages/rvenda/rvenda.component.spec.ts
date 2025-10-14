import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvendaComponent } from './rvenda.component';

describe('RvendaComponent', () => {
  let component: RvendaComponent;
  let fixture: ComponentFixture<RvendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
