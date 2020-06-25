import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputChildComponent } from './test-input-child.component';

describe('TestInputChildComponent', () => {
  let component: TestInputChildComponent;
  let fixture: ComponentFixture<TestInputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
