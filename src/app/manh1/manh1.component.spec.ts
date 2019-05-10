import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manh1Component } from './manh1.component';

describe('Manh1Component', () => {
  let component: Manh1Component;
  let fixture: ComponentFixture<Manh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
