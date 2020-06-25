import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhBlogComponent } from './thuchanh-blog.component';

describe('ThuchanhBlogComponent', () => {
  let component: ThuchanhBlogComponent;
  let fixture: ComponentFixture<ThuchanhBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
