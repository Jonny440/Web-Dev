import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs'; // Import 'of' and 'tap'
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = "https://jsonplaceholder.typicode.com";
  private albums: Album[] | null = null;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    if (this.albums) {
      return of(this.albums);
    }

    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(data => this.albums = data)
    );
  }

  getAlbum(id: number): Observable<Album> {
    if (this.albums) {
      const cachedAlbum = this.albums.find(a => a.id === id);
      if (cachedAlbum) {
        return of(cachedAlbum);
      }
    }
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(updatedAlbum => {
        if (this.albums) {
          const index = this.albums.findIndex(a => a.id === updatedAlbum.id);
          if (index !== -1) {
            this.albums[index] = updatedAlbum;
          }
        }
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    if (this.albums) {
      this.albums = this.albums.filter(a => a.id !== id);
    }
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }
}
