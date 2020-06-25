import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuchanhImageGalleryComponent } from './thuchanh-image-gallery.component';
import { ImageCardComponent } from './image-card/image-card.component';



@NgModule({
  declarations: [ThuchanhImageGalleryComponent, ImageCardComponent],
  imports: [
    CommonModule
  ], exports: [ThuchanhImageGalleryComponent]
})
export class ThuchanhImageGalleryModule { }
