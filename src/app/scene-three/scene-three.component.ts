import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'scene-three',
  templateUrl: './scene-three.component.html',
  styleUrls: ['./scene-three.component.css'],
  providers: [AlbumService]
})
export class SceneThreeComponent implements OnInit {

  constructor(private router: Router, private albumService: AlbumService){}

  albums: Album[];

goToDetailPage(clickedAlbum: Album) {
     this.router.navigate(['albums', clickedAlbum.id]);
   };


  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
