import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoingComponent } from './cabecalhoing.component';

describe('CabecalhoingComponent', () => {
  let component: CabecalhoingComponent;
  let fixture: ComponentFixture<CabecalhoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
