import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Playlist, Playlists, Tracks, Track } from './classes';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  authUrl: string = 'https://accounts.spotify.com/authorize';
  url: string = 'https://api.spotify.com/v1/';
  currentUserUrl: string = 'https://api.spotify.com/v1/me';

  clientId: string = '58a76a87e3a24244b82175c3c4eae403';
  clientSecret: string = 'cd52e968bf2e4243bdf28e5f2575365d';

  public authToken: string;

  constructor(
    private http: HttpClient,

  ) { }

  public authorize(){
    window.location.href = this.authUrl + '?client_id=' + this.clientId
    + '&response_type=token&scopes=playlist-read-private%20user-read-email%20user-read-private&redirect_uri=http://localhost:4200/home';
  }

  public getPlaylists(userId: string): Observable<Playlists>{
    const obs = this.http.get(this.url + 'users/' + userId + '/playlists', { headers: {'Authorization': 'Bearer ' + this.authToken}}).pipe(
      map((res: Playlists) => {
        return res;
      })
    )
    return obs;
  }

  public getCurrentUser(): Observable<User>{
    const obs = this.http.get(this.currentUserUrl, { headers: {'Authorization': 'Bearer ' + this.authToken}}).pipe(
      map((res: User) => {
        return res;
      }
    ));
    return obs;
  }

  public getPlaylistTracks(playlistId: string): Observable<Tracks> {
    const obs = this.http.get(this.url + 'playlists/' + playlistId + '/tracks', { headers: {'Authorization': 'Bearer ' + this.authToken}}).pipe(
      map((res: Tracks) => {
        return res;
      })
    )
    return obs;
  }
}
