import { Component, OnInit, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { finalize } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core'; // 1. Import

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onDelete(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id);
  }
}
