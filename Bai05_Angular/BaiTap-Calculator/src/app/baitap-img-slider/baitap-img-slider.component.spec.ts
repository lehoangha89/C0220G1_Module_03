import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapImgSliderComponent } from './baitap-img-slider.component';

describe('BaitapImgSliderComponent', () => {
  let component: BaitapImgSliderComponent;
  let fixture: ComponentFixture<BaitapImgSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapImgSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
