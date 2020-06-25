import { Component, OnInit, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';

@Component({
  selector: 'app-baitap-img-slider',
  templateUrl: './baitap-img-slider.component.html',
  styleUrls: ['./baitap-img-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaitapImgSliderComponent implements OnInit, AfterContentInit{
  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>;
  component;
  activeIndex = 0;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

}
