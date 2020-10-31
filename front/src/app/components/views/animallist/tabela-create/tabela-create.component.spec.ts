import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCreateComponent } from './tabela-create.component';

describe('TabelaCreateComponent', () => {
  let component: TabelaCreateComponent;
  let fixture: ComponentFixture<TabelaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
