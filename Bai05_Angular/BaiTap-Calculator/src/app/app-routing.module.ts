import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TestVideoComponent} from './test-video/test-video.component';
import {TestCalculatorComponent} from './test-calculator/test-calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {ThuchanhNameCardComponent} from './thuchanh-name-card/thuchanh-name-card.component';
import {TestInputParentComponent} from './test-input-parent/test-input-parent.component';
import {ThuchanhUngdungTodoComponent} from './thuchanh-ungdung-todo/thuchanh-ungdung-todo.component';
import {TestAngularFormComponent} from './test-angular-form/test-angular-form.component';
import {ThuchanhTimelinesComponent} from './thuchanh-timelines/thuchanh-timelines.component';
import {AppRegistrationComponent} from './app-registration/app-registration.component';
import {ThuchanhYoutubePlaylistComponent} from './thuchanh-youtube-playlist/thuchanh-youtube-playlist.component';
import {ThuchanhYoutubePlayerComponent} from './thuchanh-youtube-player/thuchanh-youtube-player.component';
import {BaitapDictionaryPageComponent} from './baitap-dictionary-page/baitap-dictionary-page.component';
import {BaitapDictionaryDetailComponent} from './baitap-dictionary-detail/baitap-dictionary-detail.component';
import {BaitapDictionaryComponent} from './baitap-dictionary/baitap-dictionary.component';
import {ThuchanhImageGalleryComponent} from './thuchanh-image-gallery/thuchanh-image-gallery.component';
import {BaitapImgSliderComponent} from './baitap-img-slider/baitap-img-slider.component';
import {ThuchanhBlogComponent} from './thuchanh-blog/thuchanh-blog.component';
import {ThuchanhBlogDetailComponent} from './thuchanh-blog-detail/thuchanh-blog-detail.component';
import {ThuchanhBlogEditComponent} from './thuchanh-blog-edit/thuchanh-blog-edit.component';

const routes: Routes = [
  {path: 'video', component: TestVideoComponent},
  {path: 'calculator', component: TestCalculatorComponent},
  {path: 'color-picker', component: ColorPickerComponent},
  {path: 'name-card', component: ThuchanhNameCardComponent},
  {path: 'input', component: TestInputParentComponent},
  {path: 'todo', component: ThuchanhUngdungTodoComponent},
  {path: 'test-form', component: TestAngularFormComponent},
  {path: 'register', component: AppRegistrationComponent},
  {path: 'timelines', component: ThuchanhTimelinesComponent},
  {
    path: 'youtube', component: ThuchanhYoutubePlaylistComponent,
    children: [{
      path: ':id', component: ThuchanhYoutubePlayerComponent
    }]
  },

  {
    path: 'dictionary', component: BaitapDictionaryComponent,
    children: [{
      path: ':key',
      component: BaitapDictionaryDetailComponent
    }]
  },
  {path: 'gallery', component: ThuchanhImageGalleryComponent},
  {path: 'slide', component: BaitapImgSliderComponent},
  {path: 'blog', component: ThuchanhBlogComponent},
  // {path: 'blog/:id', component: ThuchanhBlogDetailComponent},
  // {path: 'blog/:id/edit', component: ThuchanhBlogEditComponent},
  {path: '**', component: TestVideoComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
