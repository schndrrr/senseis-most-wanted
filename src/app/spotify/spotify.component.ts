import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Playlist, PlaylistEntry } from '../classes';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {


  clicked: boolean = false;
  playlists: Playlist[];
  user: User;
  playlistId: string;
  trackList: PlaylistEntry[];

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    console.log('peace');
    if (this.spotifyService.authToken != undefined) {
      this.spotifyService.getCurrentUser().subscribe(u => {
        this.user = u;
        this.spotifyService.getPlaylists(u.id).subscribe(playlists => {
          this.playlists = playlists.items.filter(m => m.owner.id == this.user.id);
        })
      });
    }
  }
}
