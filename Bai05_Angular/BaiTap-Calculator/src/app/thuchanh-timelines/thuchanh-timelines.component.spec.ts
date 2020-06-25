import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhTimelinesComponent } from './thuchanh-timelines.component';

describe('ThuchanhTimelinesComponent', () => {
  let component: ThuchanhTimelinesComponent;
  let fixture: ComponentFixture<ThuchanhTimelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhTimelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
