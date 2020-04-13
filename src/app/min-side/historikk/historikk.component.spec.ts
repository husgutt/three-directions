import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorikkComponent } from './historikk.component';

describe('HistorikkComponent', () => {
  let component: HistorikkComponent;
  let fixture: ComponentFixture<HistorikkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorikkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorikkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
