import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtviklingComponent } from './utvikling.component';

describe('UtviklingComponent', () => {
  let component: UtviklingComponent;
  let fixture: ComponentFixture<UtviklingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtviklingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtviklingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
