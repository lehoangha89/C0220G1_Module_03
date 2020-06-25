import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TestCalculatorComponent} from './test-calculator/test-calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {ThuchanhNameCardComponent} from './thuchanh-name-card/thuchanh-name-card.component';
import {ThuchanhProgressBarComponent} from './thuchanh-progress-bar/thuchanh-progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {TestVideoComponent} from './test-video/test-video.component';
import {TestNgForComponent} from './test-ng-for/test-ng-for.component';
import {AppRoutingModule} from './app-routing.module';
import {TestInputParentComponent} from './test-input-parent/test-input-parent.component';
import {TestInputChildComponent} from './test-input-child/test-input-child.component';
import {ThuchanhUngdungTodoComponent} from './thuchanh-ungdung-todo/thuchanh-ungdung-todo.component';
import {TestAngularFormComponent} from './test-angular-form/test-angular-form.component';
import {AppRegistrationComponent} from './app-registration/app-registration.component';
import {ThuchanhTimelinesComponent} from './thuchanh-timelines/thuchanh-timelines.component';
import {ThuchanhYoutubePlaylistComponent} from './thuchanh-youtube-playlist/thuchanh-youtube-playlist.component';
import {ThuchanhYoutubePlayerComponent} from './thuchanh-youtube-player/thuchanh-youtube-player.component';
import {BaitapDictionaryComponent} from './baitap-dictionary/baitap-dictionary.component';
import {BaitapDictionaryPageComponent} from './baitap-dictionary-page/baitap-dictionary-page.component';
import {BaitapDictionaryDetailComponent} from './baitap-dictionary-detail/baitap-dictionary-detail.component';
import {ThuchanhImageGalleryModule} from './thuchanh-image-gallery/thuchanh-image-gallery.module';
import {GalleryConfig} from './thuchanh-image-gallery/token';
import {BaitapDictionaryService} from './baitap-dictionary.service';
import {BaitapImgSliderModule} from './baitap-img-slider/baitap-img-slider.module';
import { ThuchanhBlogComponent } from './thuchanh-blog/thuchanh-blog.component';
import { ThuchanhBlogEditComponent } from './thuchanh-blog-edit/thuchanh-blog-edit.component';
import { ThuchanhBlogDetailComponent } from './thuchanh-blog-detail/thuchanh-blog-detail.component';
import {BlogRoutingModule} from './thuchanh-blog/blog-routing.module';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    TestCalculatorComponent,
    ColorPickerComponent,
    ThuchanhNameCardComponent,
    ThuchanhProgressBarComponent,
    RatingBarComponent,
    TestVideoComponent,
    TestNgForComponent,
    TestInputParentComponent,
    TestInputChildComponent,
    ThuchanhUngdungTodoComponent,
    TestAngularFormComponent,
    AppRegistrationComponent,
    ThuchanhTimelinesComponent,
    ThuchanhYoutubePlaylistComponent,
    ThuchanhYoutubePlayerComponent,
    BaitapDictionaryComponent,
    BaitapDictionaryPageComponent,
    BaitapDictionaryDetailComponent,
    ThuchanhBlogComponent,
    ThuchanhBlogEditComponent,
    ThuchanhBlogDetailComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ThuchanhImageGalleryModule,
    HttpClientModule,
    BaitapImgSliderModule,
  ],
  providers: [BaitapDictionaryService, {provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
