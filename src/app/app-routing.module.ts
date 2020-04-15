import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './spotify/spotify.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main-menu'
  },
  {
    path: 'main-menu',
    pathMatch: 'full',
    component: MainMenuComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: SpotifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
