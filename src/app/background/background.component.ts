import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  accessToken: string = '';

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('hallo');
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
  }

}
