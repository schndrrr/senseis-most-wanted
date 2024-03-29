import { Component, OnInit, Input } from '@angular/core';
import { Playlist, Track, Tracks, PlaylistEntry, Playlists } from 'src/app/classes';
import { SpotifyService } from 'src/app/spotify.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() playlist?: Playlist;
  
  trackList: PlaylistEntry[];

  trackId: string;
  url: string;

  mouse: boolean = false;

  constructor(
    private spotifyService: SpotifyService,
    public dialogRef: MatDialogRef<AlbumDetailsComponent>,
  ) { }

  ngOnInit() {
    this.spotifyService.getPlaylistTracks(this.playlist.id).subscribe(res => {
      this.trackList = res.items;
    });
  }

  mouseEv(m: boolean, id?: string){
    this.trackId = id;
    this.mouse = m;
  }

  openSpotify(){
    window.open(this.playlist.external_urls.spotify, "_blank");
  }
}
