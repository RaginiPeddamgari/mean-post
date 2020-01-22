import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {MatInputModule} from '@angular/material'

@NgModule({
  declarations: [AppComponent, PostCreateComponent],
  imports: [BrowserModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
