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

  accessToken: string = '';
  clicked: boolean = false;
  playlists: Playlist[];
  user: User;
  playlistId: string;
  trackList: PlaylistEntry[];

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.fragment.pipe(
      map(fragment => new URLSearchParams(fragment)),
      map((params) => {
        this.accessToken = params.get('access_token');
        if (this.accessToken != undefined) {
          this.spotifyService.authToken = this.accessToken;
        }
        if (this.spotifyService.authToken == undefined) {
          this.spotifyService.authorize();
        }
      })
    ).subscribe();

    if (this.spotifyService.authToken != undefined) {
      this.spotifyService.getCurrentUser().subscribe(u => {
        this.user = u;
        this.spotifyService.getPlaylists(u.id).subscribe(playlists => {
          this.playlists = playlists.items;
        })
      });
    }
  }
}
