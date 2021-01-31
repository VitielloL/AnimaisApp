import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animallistv2Component } from './animallistv2.component';

describe('Animallistv2Component', () => {
  let component: Animallistv2Component;
  let fixture: ComponentFixture<Animallistv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animallistv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Animallistv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
