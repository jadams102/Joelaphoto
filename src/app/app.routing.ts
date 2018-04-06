import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'admin',
    component: CreatorPageComponent
  },
  {
    path: 'admin/add',
    component: AddPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
