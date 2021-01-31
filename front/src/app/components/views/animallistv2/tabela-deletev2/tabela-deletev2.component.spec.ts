import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeletev2Component } from './tabela-deletev2.component';

describe('TabelaDeletev2Component', () => {
  let component: TabelaDeletev2Component;
  let fixture: ComponentFixture<TabelaDeletev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeletev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeletev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
