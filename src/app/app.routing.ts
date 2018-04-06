import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';


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
    component: AdminComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminDetailComponent
  },
  {
    path: 'admin/add',
    component: AddPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
