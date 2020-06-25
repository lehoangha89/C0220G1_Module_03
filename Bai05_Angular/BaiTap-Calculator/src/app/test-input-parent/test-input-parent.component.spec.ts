import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputParentComponent } from './test-input-parent.component';

describe('TestInputParentComponent', () => {
  let component: TestInputParentComponent;
  let fixture: ComponentFixture<TestInputParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInputParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
