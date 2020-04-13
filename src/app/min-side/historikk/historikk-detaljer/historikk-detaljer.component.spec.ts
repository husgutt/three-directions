import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorikkDetaljerComponent } from './historikk-detaljer.component';

describe('HistorikkDetaljerComponent', () => {
  let component: HistorikkDetaljerComponent;
  let fixture: ComponentFixture<HistorikkDetaljerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorikkDetaljerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorikkDetaljerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
