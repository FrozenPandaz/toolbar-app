import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar1Component } from './toolbar1.component';

describe('Toolbar1Component', () => {
  let component: Toolbar1Component;
  let fixture: ComponentFixture<Toolbar1Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [Toolbar1Component]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Toolbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
