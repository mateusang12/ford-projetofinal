import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoiadoresComponent } from './apoiadores.component';

describe('ApoiadoresComponent', () => {
  let component: ApoiadoresComponent;
  let fixture: ComponentFixture<ApoiadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoiadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoiadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
