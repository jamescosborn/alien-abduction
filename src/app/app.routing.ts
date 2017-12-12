import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';

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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
