import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewConponentComponent } from './new-conponent/new-conponent.component';
import { NewComponent } from './new/new.component';
import { ShowPetshowPetComponent } from './show-petshow-pet/show-petshow-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NewConponentComponent,
    NewComponent,
    ShowPetshowPetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
