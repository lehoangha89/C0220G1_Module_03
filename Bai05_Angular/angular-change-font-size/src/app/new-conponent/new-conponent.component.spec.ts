import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConponentComponent } from './new-conponent.component';

describe('NewConponentComponent', () => {
  let component: NewConponentComponent;
  let fixture: ComponentFixture<NewConponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
