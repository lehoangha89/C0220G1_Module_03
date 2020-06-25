import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhBlogEditComponent } from './thuchanh-blog-edit.component';

describe('ThuchanhBlogEditComponent', () => {
  let component: ThuchanhBlogEditComponent;
  let fixture: ComponentFixture<ThuchanhBlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhBlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
