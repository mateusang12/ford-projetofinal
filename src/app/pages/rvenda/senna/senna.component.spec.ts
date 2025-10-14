import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SennaComponent } from './senna.component';

describe('SennaComponent', () => {
  let component: SennaComponent;
  let fixture: ComponentFixture<SennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SennaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
