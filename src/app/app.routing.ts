import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'creator',
    component: CreatorPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
