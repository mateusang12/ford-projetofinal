import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapepagComponent } from './rodapepag.component';

describe('RodapepagComponent', () => {
  let component: RodapepagComponent;
  let fixture: ComponentFixture<RodapepagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapepagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapepagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
