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
        this.spotifyService.authToken = this.accessToken;
      })
    ).subscribe();
    // this.accessToken = new URLSearchParams(window.location.search).get('token_type');
    console.log(this.accessToken);
    if (this.accessToken != null) {
      this.spotifyService.getCurrentUser().subscribe(u => {
        this.user = u;
        this.spotifyService.getPlaylists(u.id).subscribe(playlists => {
          this.playlists = playlists.items;
        })
      });
    }
  }

  test() {
    this.clicked = true;
    this.spotifyService.authorize();
  }

}
