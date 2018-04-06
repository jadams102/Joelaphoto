import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { config } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreatorPageComponent,
    AddPostComponent,
    NavbarComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
