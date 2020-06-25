import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngularFormComponent } from './test-angular-form.component';

describe('TestAngularFormComponent', () => {
  let component: TestAngularFormComponent;
  let fixture: ComponentFixture<TestAngularFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAngularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAngularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
