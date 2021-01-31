import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCreatev2Component } from './tabela-createv2.component';

describe('TabelaCreatev2Component', () => {
  let component: TabelaCreatev2Component;
  let fixture: ComponentFixture<TabelaCreatev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCreatev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCreatev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
