import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeleteComponent } from './tabela-delete.component';

describe('TabelaDeleteComponent', () => {
  let component: TabelaDeleteComponent;
  let fixture: ComponentFixture<TabelaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
