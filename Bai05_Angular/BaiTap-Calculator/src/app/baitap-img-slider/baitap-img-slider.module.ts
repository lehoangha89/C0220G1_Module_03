import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import { BaitapImgSliderComponent } from './baitap-img-slider.component';



@NgModule({
  declarations: [ImgSlideComponent, BaitapImgSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [ImgSlideComponent, BaitapImgSliderComponent]
})
export class BaitapImgSliderModule { }
