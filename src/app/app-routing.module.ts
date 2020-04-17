import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './spotify/spotify.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserComponent } from './user/user.component';
import { BackgroundComponent } from './background/background.component';


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
    path: 'spotify',
    pathMatch: 'full',
    component: SpotifyComponent
  },
  {
    path: 'me',
    pathMatch: 'full',
    component: UserComponent
  },
  {
    path: 'home',
    component: BackgroundComponent,
    children: [
      {
        path: '',
        component: BackgroundComponent
      },
      {
        path: 'spotify',
        pathMatch: 'full',
        component: SpotifyComponent
      },
      {
        path: 'me',
        pathMatch: 'full',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
