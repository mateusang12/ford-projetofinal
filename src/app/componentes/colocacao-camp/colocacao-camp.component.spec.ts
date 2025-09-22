import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacaoCampComponent } from './colocacao-camp.component';

describe('ColocacaoCampComponent', () => {
  let component: ColocacaoCampComponent;
  let fixture: ComponentFixture<ColocacaoCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColocacaoCampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColocacaoCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
