import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { TagComponent } from './tag/tag.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './services/auth-guard.service';



const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tag/:selectedTag',
    component: TagComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/add',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
