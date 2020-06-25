import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhBlogDetailComponent } from './thuchanh-blog-detail.component';

describe('ThuchanhBlogDetailComponent', () => {
  let component: ThuchanhBlogDetailComponent;
  let fixture: ComponentFixture<ThuchanhBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
