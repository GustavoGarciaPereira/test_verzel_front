import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEntradaComponent } from './listagem-entrada.component';

describe('ListagemEntradaComponent', () => {
  let component: ListagemEntradaComponent;
  let fixture: ComponentFixture<ListagemEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
