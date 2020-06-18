import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TestCalculatorComponent } from './test-calculator/test-calculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ThuchanhNameCardComponent } from './thuchanh-name-card/thuchanh-name-card.component';
import { ThuchanhProgressBarComponent } from './thuchanh-progress-bar/thuchanh-progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { TestVideoComponent } from './test-video/test-video.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TestCalculatorComponent,
    ColorPickerComponent,
    ThuchanhNameCardComponent,
    ThuchanhProgressBarComponent,
    RatingBarComponent,
    TestVideoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
