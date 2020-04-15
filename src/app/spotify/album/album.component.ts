import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/classes';
import { MatDialog } from '@angular/material/dialog';
import { AlbumDetailsComponent } from '../album-details/album-details.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  @Input() playlist: Playlist;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openTrackDialog(){
    let instance = this.dialog.open(AlbumDetailsComponent);
    instance.componentInstance.playlist = this.playlist;
  }

}
