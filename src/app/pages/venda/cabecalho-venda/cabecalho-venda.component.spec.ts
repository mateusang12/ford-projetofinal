import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoVendaComponent } from './cabecalho-venda.component';

describe('CabecalhoVendaComponent', () => {
  let component: CabecalhoVendaComponent;
  let fixture: ComponentFixture<CabecalhoVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
