import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPilotosComponent } from './lista-pilotos.component';

describe('ListaPilotosComponent', () => {
  let component: ListaPilotosComponent;
  let fixture: ComponentFixture<ListaPilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPilotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
