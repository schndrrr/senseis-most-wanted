import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { RecentTracks } from '../classes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  recentTracks: RecentTracks[];

  constructor(
    private spotifyService: SpotifyService,

  ) { }

  ngOnInit(): void {
    this.spotifyService.getRecentlyPlayedSongs().subscribe(res => {
      this.recentTracks = res.items;
    })
  }

}
