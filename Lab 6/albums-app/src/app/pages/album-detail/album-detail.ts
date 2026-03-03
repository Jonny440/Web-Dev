import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  isLoading = true;
  isSaving = false;
  savedMsg = '';

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;

    this.albumService.getAlbum(id).subscribe({
        next: (album) => {
          this.album = album;
          this.editTitle = album.title;

          this.isLoading = false;
          this.cdr.detectChanges();
          console.log(album);
        }
    });
  }

  onSave() {
    if (!this.album) return;
    this.isSaving = true;
    this.savedMsg = '';
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editTitle;
      this.isSaving = false;
      this.savedMsg = '✓ Saved!';
      setTimeout(() => this.savedMsg = '', 2500);
      this.cdr.detectChanges();
    });
  }
}
