import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  isLoading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
}
