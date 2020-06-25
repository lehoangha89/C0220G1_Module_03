import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhImageGalleryComponent } from './thuchanh-image-gallery.component';

describe('ThuchanhImageGalleryComponent', () => {
  let component: ThuchanhImageGalleryComponent;
  let fixture: ComponentFixture<ThuchanhImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
