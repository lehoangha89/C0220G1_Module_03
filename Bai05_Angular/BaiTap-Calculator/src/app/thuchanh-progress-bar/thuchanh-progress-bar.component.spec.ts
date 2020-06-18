import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhProgressBarComponent } from './thuchanh-progress-bar.component';

describe('ThuchanhProgressBarComponent', () => {
  let component: ThuchanhProgressBarComponent;
  let fixture: ComponentFixture<ThuchanhProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
