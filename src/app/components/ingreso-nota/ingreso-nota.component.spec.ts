import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoNotaComponent } from './ingreso-nota.component';

describe('IngresoNotaComponent', () => {
  let component: IngresoNotaComponent;
  let fixture: ComponentFixture<IngresoNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
