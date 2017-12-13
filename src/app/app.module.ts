import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';
import { SceneThreeComponent } from './scene-three/scene-three.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SceneOneComponent,
    SceneTwoComponent,
    SceneThreeComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
