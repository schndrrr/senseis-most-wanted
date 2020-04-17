import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';




import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyService } from './spotify.service';
import { AlbumComponent } from './spotify/album/album.component';
import { AlbumDetailsComponent } from './spotify/album-details/album-details.component';

import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { BackgroundComponent } from './background/background.component';




@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    MainMenuComponent,
    NavbarComponent,
    UserComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    ScrollingModule,
    MatIconModule,
    
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
