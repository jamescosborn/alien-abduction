import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';
import { SceneThreeComponent } from './scene-three/scene-three.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'scene-one',
    component: SceneOneComponent
  },
  {
    path: 'scene-two',
    component: SceneTwoComponent
  },
  {
    path: 'scene-three',
    component: SceneThreeComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
