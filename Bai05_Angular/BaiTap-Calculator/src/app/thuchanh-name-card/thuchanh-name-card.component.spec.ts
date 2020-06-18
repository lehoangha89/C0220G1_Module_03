import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhNameCardComponent } from './thuchanh-name-card.component';

describe('ThuchanhNameCardComponent', () => {
  let component: ThuchanhNameCardComponent;
  let fixture: ComponentFixture<ThuchanhNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
