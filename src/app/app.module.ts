import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreatorPageComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
