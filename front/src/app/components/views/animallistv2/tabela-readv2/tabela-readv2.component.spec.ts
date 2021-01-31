import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaReadv2Component } from './tabela-readv2.component';

describe('TabelaReadv2Component', () => {
  let component: TabelaReadv2Component;
  let fixture: ComponentFixture<TabelaReadv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaReadv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaReadv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
