import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCarComponent } from './cadastro-car.component';

describe('CadastroCarComponent', () => {
  let component: CadastroCarComponent;
  let fixture: ComponentFixture<CadastroCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
