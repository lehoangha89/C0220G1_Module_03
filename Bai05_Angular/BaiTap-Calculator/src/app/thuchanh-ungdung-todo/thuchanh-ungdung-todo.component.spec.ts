import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhUngdungTodoComponent } from './thuchanh-ungdung-todo.component';

describe('ThuchanhUngdungTodoComponent', () => {
  let component: ThuchanhUngdungTodoComponent;
  let fixture: ComponentFixture<ThuchanhUngdungTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhUngdungTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhUngdungTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
