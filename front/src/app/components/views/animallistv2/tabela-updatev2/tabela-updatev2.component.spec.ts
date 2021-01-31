import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUpdatev2Component } from './tabela-updatev2.component';

describe('TabelaUpdatev2Component', () => {
  let component: TabelaUpdatev2Component;
  let fixture: ComponentFixture<TabelaUpdatev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaUpdatev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaUpdatev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
