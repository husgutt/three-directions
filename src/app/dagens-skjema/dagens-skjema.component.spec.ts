import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagensSkjemaComponent } from './dagens-skjema.component';

describe('DagensSkjemaComponent', () => {
  let component: DagensSkjemaComponent;
  let fixture: ComponentFixture<DagensSkjemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagensSkjemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagensSkjemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
