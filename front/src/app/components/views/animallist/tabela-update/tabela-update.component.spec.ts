import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUpdateComponent } from './tabela-update.component';

describe('TabelaUpdateComponent', () => {
  let component: TabelaUpdateComponent;
  let fixture: ComponentFixture<TabelaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
